
let listTodoJob = JSON.parse(localStorage.getItem("listTodoJob")) ? JSON.parse(localStorage.getItem("listTodoJob")) : [];
console.log(listTodoJob)

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  
  var currentTask = ev.target.textContent.slice(0, -1);
  if (ev.target.tagName === 'LI') {
    for(i = 0; i < listTodoJob.length; i++){
      if(listTodoJob[i].taskName === currentTask && listTodoJob[i].status === 'NOT_DONE'){
        listTodoJob[i].status = 'DONE';
        localStorage.setItem("listTodoJob", JSON.stringify(listTodoJob));
        ev.target.classList.add('checked');
      }
      else if(listTodoJob[i].taskName === currentTask && listTodoJob[i].status === 'DONE'){
        listTodoJob[i].status = 'NOT_DONE';
        localStorage.setItem("listTodoJob", JSON.stringify(listTodoJob));
        ev.target.classList.remove('checked');
      }
    }
    
  }
}, false);

function loadTaskTodo(){
  for(i = 0; i < listTodoJob.length; i++){

    if(listTodoJob[i].status !== 'DELETED'){

      var li = document.createElement("li");
      var t = document.createTextNode(listTodoJob[i].taskName);
      li.appendChild(t);
      document.getElementById("myUL").appendChild(li);
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      if(listTodoJob[i].status === 'DONE'){
        li.classList.add('checked');
      }
    }
  }
}
loadTaskTodo();

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var blockParent = this.parentElement;
    currentTask = blockParent.textContent.slice(0, -1);
    for(i = 0; i < listTodoJob.length; i++){
      if(listTodoJob[i].taskName === currentTask){
        console.log(i);
        listTodoJob[i].status = 'DELETED';
        localStorage.setItem("listTodoJob", JSON.stringify(listTodoJob));
      }
    }
    blockParent.style.display = "none";
  }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  listTodoJob.push({
    taskName: inputValue,
    status: 'NOT_DONE'
  })

  localStorage.setItem("listTodoJob", JSON.stringify(listTodoJob));

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var blockParent = this.parentElement;
      blockParent.style.display = "none";
    }
  }
}