var toDos = [];
var toDone = [];
document.getElementById("add").addEventListener("click", addTodo);
document.getElementById("stilltodo").addEventListener("click", complete);
var list = document.getElementById("stilltodo");

function addTodo() {
  //adds input to array
  todo = document.getElementById("todo").value;
  toDos.push(todo);

  //makes sure only the last input gets added
  var lastInList = toDos[toDos.length - 1];
  //creates li with the todo
  var li = document.createElement("li");
  li.setAttribute("class", "list-group-item");
  //todos.length gives a custom id to each array item
  li.setAttribute("id", toDos.length);

  li.textContent = lastInList.toUpperCase();

  document.getElementById("stilltodo").appendChild(li);
  document.getElementById("todo").value = "";
}

function complete(event) {
  var s = document.createElement("s");

  var clickedTask = document.getElementById(event.target.id);

  clickedTask.parentNode.removeChild(clickedTask);
  //below deletes it from todo array and assigns to todone array
  toDone = toDos.slice(event.target.id - 1, event.target.id);
  var lastInList = toDone[toDone.length - 1];
  //next bit creates new element under the completed column
  var li = document.createElement("li");
  li.setAttribute("class", "list-group-item done");
  li.setAttribute("id", toDone.length);
  li.textContent = lastInList.toUpperCase();
  document.getElementById("completed").appendChild(li);
}
//clickedTask.parentNode.insertBefore(s, clickedTask);
//s.appendChild(clickedTask);
