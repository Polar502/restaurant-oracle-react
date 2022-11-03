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

//nuevos
export const postUser = async (tipoUser, newUser) => {
  const res = await fetch(`${API}/${tipoUser}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  return await res.json();
};

export const putUser = async (tipoUser, id, newUser) => {
  const res = await fetch(`${API}/${tipoUser}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  return res;
};