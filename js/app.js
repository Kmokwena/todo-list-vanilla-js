const tasks = ["clean a room", "do homework", "pray"];
const taskList = document.getElementsByClassName("task-list")[0];
const inputText = document.getElementById("input-text");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function () {
  let text = inputText.value;

  inputText.value = "";
  const task = document.createElement("div");
  task.className = "task";

  const taskText = document.createElement("p");
  taskText.innerText = text;
  task.appendChild(taskText);

  const editBtn = document.createElement("button");
  editBtn.innerText = "edit";
  task.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  task.appendChild(deleteBtn);

  taskList.appendChild(task);
});
