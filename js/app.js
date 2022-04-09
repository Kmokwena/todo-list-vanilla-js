const tasks = ["clean a room", "do homework", "pray"];
const taskList = document.getElementsByClassName("task-list")[0];
const inputText = document.getElementById("input-text");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function () {
  addTask(inputText.value);
  inputText.value = "";
});

function addTask(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const taskText = document.createElement("p");
  taskText.innerText = task;
  taskDiv.appendChild(taskText);

  const editBtn = document.createElement("button");
  editBtn.innerText = "edit";
  taskDiv.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  taskDiv.appendChild(deleteBtn);

  taskList.appendChild(taskDiv);
}

addTask("sleep");
addTask("wake");
addTask("eat");
