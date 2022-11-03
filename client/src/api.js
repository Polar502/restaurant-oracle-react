const API = "http://localhost:5000";

export const getUser = async (tipoUser, id) => {
  const res = await fetch(`${API}/${tipoUser}/${id}`);
  return await res.json();
};

export const deleteUser = async (tipoUser, id) => {
  await fetch(`${API}/${tipoUser}/${id}`, {
    method: "DELETE",
  });
};

export const getUsers = async (tipoUser) => {
  const res = await fetch(`${API}/${tipoUser}`, {
    method: "GET",
  });
  return await res.json();
};

// export const saveTask = async (newTask) => {
//   const res = await fetch(API, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newTask),
//   });
//   return await res.json();
// };

// export const getTask = async (taskId) => {
//   const res = await fetch(`${API}/${taskId}`);
//   return await res.json();
// };

// export const updateTask = async (taskId, newTask) => {
//   console.log(taskId, newTask)
//   const res = await fetch(`${API}/${taskId}`, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newTask),
//   });
//   return res;
// };