export function loadTaskTodo(listTodoJob) {
    for (i = 0; i < listTodoJob.length; i++) {
      if (listTodoJob[i].status !== "DELETED") {
        var li = document.createElement("li");
        var t = document.createTextNode(listTodoJob[i].taskName);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        if (listTodoJob[i].status === "DONE") {
          li.classList.add("checked");
        }
      }
    }
  }