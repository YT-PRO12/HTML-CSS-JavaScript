const form = document.querySelector("#taskForm");
const input = document.querySelector("#taskInput");
const list = document.querySelector("#taskList");
const filters = document.querySelector("#filters");

let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
let currentFilter = "all";

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  list.innerHTML = "";

  const visible = tasks.filter(task => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  visible.forEach(task => {
    const li = document.createElement("li");
    li.dataset.id = task.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const text = document.createElement("span");
    text.textContent = task.text;
    text.className = task.completed ? "done" : "";

    const remove = document.createElement("button");
    remove.textContent = "Delete";
    remove.className = "delete";

    li.append(checkbox, text, remove);
    list.append(li);
  });
}

form.addEventListener("submit", event => {
  event.preventDefault();

  tasks.push({
    id: crypto.randomUUID(),
    text: input.value.trim(),
    completed: false
  });

  input.value = "";
  save();
  render();
});

list.addEventListener("click", event => {
  const item = event.target.closest("li");
  if (!item) return;

  const task = tasks.find(t => t.id === item.dataset.id);
  if (!task) return;

  if (event.target.matches("input")) {
    task.completed = event.target.checked;
  }

  if (event.target.matches(".delete")) {
    tasks = tasks.filter(t => t.id !== task.id);
  }

  save();
  render();
});

filters.addEventListener("click", event => {
  if (!event.target.dataset.filter) return;
  currentFilter = event.target.dataset.filter;
  render();
});

render();
