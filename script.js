const taskInput = document.querySelector("#input");
const addTaskButton = document.querySelector("#add");
const taskTable = document.querySelector("#table");
const editButtonClass = document.querySelector(".edit");
const deleteButtons = document.querySelectorAll(".delete");
const taskCounterDisplay = document.querySelector(".taskscore");


let delclicked=true;
let taskCompletedCount = 0;
let totalTaskCount = 0;


addTaskButton.addEventListener("click", () => {
  if (taskInput.value.trim().length > 0) {
    addTaskRow();
    totalTaskCount++;
    taskCounterDisplay.innerHTML = `<h3>Tasks: ${taskCompletedCount}/${totalTaskCount}</h3>`;
  } else {
    alert(`Please add your tasks`);
  }
  taskInput.value = "";
});

taskTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    taskCompletedCount++;
    delclicked=false;
    const taskRow = event.target.closest("tr");
    const completionIndicator = taskRow.querySelector("td:nth-child(1)");
    completionIndicator.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
    taskCounterDisplay.innerHTML = `<h3>Tasks: ${taskCompletedCount}/${totalTaskCount}</h3>`;
  } else if (event.target.classList.contains("edit") && !delclicked==false) {
      const taskRow = event.target.closest("tr");
      const taskCell = taskRow.querySelector("td:nth-child(2)");
      const currentTask = taskCell.textContent;
      const updatedTask = prompt(`Edit your task: ${currentTask}`);
      if (updatedTask !== null && updatedTask.trim() !== "") {
        taskCell.textContent = updatedTask;
      }
    }
});

function addTaskRow() {
  const taskRow = document.createElement("tr");

  taskRow.innerHTML = `
    <td><i class="fa-regular fa-circle"></i></td>
    <td>${taskInput.value}</td>
    <td><button class="edit">Edit</button></td>
    <td><button class="delete">Done</button></td>
  `;
  taskTable.appendChild(taskRow);
}
