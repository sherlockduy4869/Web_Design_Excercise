// import { loadTaskTodo } from "./loadTaskTodo";

function parseCustomDate(dateString) {
  const parts = dateString.split('/');
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are zero-based
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
  return null; // Handle invalid date strings
}

const dateString = '23/10/2023';
const date = parseCustomDate(dateString);
alert(date)

// async function crudTask() {

//   const urlBased = 'https://eb12f861-97fb-4590-b42f-d8a6cb9178d9.mock.pstmn.io';

//   let listTodoJob = await fetch(
//     `${urlBased}/tasks`
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   var list = document.querySelector("ul");
//   list.addEventListener(
//     "click",
//     async function (ev) {
//       var currentTask = ev.target.textContent.slice(0, -1);
//       if (ev.target.tagName === "LI") {
//         for (i = 0; i < listTodoJob.length; i++) {
//           if (
//             listTodoJob[i].taskName === currentTask &&
//             listTodoJob[i].status === "NOT_DONE"
//           ) {
//             const data = {
//               taskName: listTodoJob[i].taskName,
//               status: "DONE",
//             };

//             const markDoneTask = await fetch(
//               `${urlBased}/tasks`,
//               {
//                 method: "PUT",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(data),
//               }
//             )
//               .then((res) => {
//                 return res.json();
//               })
//               .catch((err) => {
//                 console.log(err);
//               });

//             console.log(markDoneTask);

//             ev.target.classList.add("checked");
//           } else if (
//             listTodoJob[i].taskName === currentTask &&
//             listTodoJob[i].status === "DONE"
//           ) {
//             const data = {
//               taskName: listTodoJob[i].taskName,
//               status: "NOT_DONE",
//             };

//             const markNotDoneTask = await fetch(
//               `${urlBased}/tasks/mark-not-done`,
//               {
//                 method: "PUT",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(data),
//               }
//             )
//               .then((res) => {
//                 return res.json();
//               })
//               .catch((err) => {
//                 console.log(err);
//               });

//             console.log(markNotDoneTask);
//             ev.target.classList.remove("checked");
//           }
//         }
//       }
//     },
//     false
//   );

//   // function loadTaskTodo() {
//   //   for (i = 0; i < listTodoJob.length; i++) {
//   //     if (listTodoJob[i].status !== "DELETED") {
//   //       var li = document.createElement("li");
//   //       var t = document.createTextNode(listTodoJob[i].taskName);
//   //       li.appendChild(t);
//   //       document.getElementById("myUL").appendChild(li);
//   //       var span = document.createElement("SPAN");
//   //       var txt = document.createTextNode("\u00D7");
//   //       span.className = "close";
//   //       span.appendChild(txt);
//   //       li.appendChild(span);

//   //       if (listTodoJob[i].status === "DONE") {
//   //         li.classList.add("checked");
//   //       }
//   //     }
//   //   }
//   // }
//   loadTaskTodo(listTodoJob);

//   var close = document.getElementsByClassName("close");
//   var i;
//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = async function () {
//       var blockParent = this.parentElement;
//       currentTask = blockParent.textContent.slice(0, -1);
//       for (i = 0; i < listTodoJob.length; i++) {
//         if (listTodoJob[i].taskName === currentTask) {
//           const data = {
//             taskName: listTodoJob[i].taskName,
//             status: "DELETED",
//           };

//           const deletedTask = await fetch(
//             `${urlBased}/tasks/delete-task`,
//             {
//               method: "PUT",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(data),
//             }
//           )
//             .then((res) => {
//               return res.json();
//             })
//             .catch((err) => {
//               console.log(err);
//             });

//           console.log(deletedTask);
//         }
//       }
//       blockParent.style.display = "none";
//     };
//   }

//   var addBtn = document.querySelector('.addBtn');

//   addBtn.addEventListener("click", async function () {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === "") {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";

//     const data = {
//       taskName: inputValue,
//       status: "NOT_DONE",
//     };

//     const newTask = await fetch(
//       `${urlBased}/tasks`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     )
//       .then((res) => {
//         return res.json();
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     console.log(newTask);

//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);

//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function () {
//         var blockParent = this.parentElement;
//         blockParent.style.display = "none";
//       };
//     }
//   });
// }

// crudTask();
