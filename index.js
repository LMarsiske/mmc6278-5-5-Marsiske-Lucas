const form = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");
const inputs = document.getElementsByTagName("input");

const handleSubmit = () => {
  let input = inputs[0].value;

  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.innerHTML = input;
  btn.onclick = handleClick;
  li.appendChild(btn);
  todoList.appendChild(li);
  inputs[0].value = "";
  return false;
};

const handleClick = (e) => {
  console.log(e.target);
  if (e.target.style.textDecoration === "line-through") {
    todoList.removeChild(e.target.parentNode);
  } else {
    e.target.style.textDecoration = "line-through";
  }
};

form.onsubmit = handleSubmit;
