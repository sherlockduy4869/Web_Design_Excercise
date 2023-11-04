import axios from "../services/axios";

export const addNewTask = async (newTaskInfo) => {
  const formData = new FormData();

  formData.append("taskName", newTaskInfo);
  formData.append("status", "NOT_DONE");

  const response = await axios.post("/tasks", formData);

  if (response.status === 201) {
    return response;
  }
};

export const fetchTask = async () => {
  const response = await axios.get("/tasks");

  if (response.status === 200) {
    return response.data;
  }
};

export const markDoneTask = async (taskName, status) => {
  const editURL = "/tasks?taskName=" + taskName;
  const response = await axios.put(editURL, {
    status: status,
  });

  if (response.status === 200) {
    return response.data;
  }
};

export const marNotDoneTask = async (taskName, status) => {
  const editURL = "/tasks/mark-not-done?taskName=" + taskName;
  const response = await axios.put(editURL, {
    status: status,
  });

  if (response.status === 200) {
    return response.data;
  }
};

export const deleteTask = async (taskName, status) => {
  const deleteURL = "/tasks/delete-task?taskName=" + taskName;

  const response = await axios.put(deleteURL, {
    status: status,
  });

  if (response.status === 200) {
    return response.data;
  }
};
