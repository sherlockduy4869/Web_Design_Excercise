import "../assets/TodoStye.css";
import {
  addNewTask,
  fetchTask,
  markDoneTask,
  marNotDoneTask,
  deleteTask,
} from "../hooks/useTodoApp";
import { useState, useEffect } from "react";

const TodoApp = () => {
  const [newTaskInfo, setNewTaskInfo] = useState("");
  const [listTask, setListTask] = useState([]);
  const [isReload, setIsReload] = useState(false);

  const handleAddnewTask = async () => {
    const result = await addNewTask(newTaskInfo);
    console.log(result);
  };

  const handleChangeStatusTask = async (taskName, status) => {
    if (status === "DONE") {
      const result = await marNotDoneTask(taskName, "NOT_DONE");
      setIsReload(!isReload);
      console.log(result);
    }
    if (status === "NOT_DONE") {
      const result = await markDoneTask(taskName, "DONE");
      setIsReload(!isReload);
      console.log(result);
    }
  };

  const handleDeleteTask = async (taskName) => {
    const result = await deleteTask(taskName, "DELETED");
    setIsReload(!isReload);
    console.log(result);
  };

  useEffect(() => {
    const init = async () => {
      try {
        const listTask = await fetchTask();
        
        setListTask(listTask);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [isReload]);

  return (
    <div>
      <div id="myDIV" className="header">
        <h2>TODO LIST TRAN DINH DUY</h2>
        <input
          value={newTaskInfo}
          onChange={(e) => {
            setNewTaskInfo(e.target.value);
          }}
          type="text"
          id="myInput"
          placeholder="Title..."
        />
        <span onClick={() => handleAddnewTask()} className="addBtn">
          Add
        </span>
      </div>

      <ul id="myUL">
        {listTask.map((key, index) => (
          <li
            key={index}
            onClick={() => handleChangeStatusTask(key.taskName, key.status)}
            style={{ display: key.status === "DELETED" ? "none" : "true" }}
            className={key.status === "DONE" ? "checked" : ""}
          >
            {key.taskName}
            <span
              key={index}
              onClick={() => handleDeleteTask(key.taskName)}
              className="close"
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
