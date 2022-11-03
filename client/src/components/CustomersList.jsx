import React, { useState, useEffect } from 'react'
import Prueba from './prueba'
import { getUser, getUsers, deleteUser, postUser, putUser } from '../api'

const CustomersList = (prompt) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [prueba, setPrueba] = useState(['CustomersList Component'])

  useEffect(() => {
    getingUsers()
  }, [])


  //Funcion para traer a todos los usuarios
  const getingUsers = async () => {
    try {
      const usr = await getUsers('customers');//Aqui se puede remplazar el texto con un PROP
      setUsers(usr);
    } catch (error) {
      console.log(error);
    }
  };

  //Funcion para traer a un solo usuario
  const getingUser = async () => {
    try {
      const usr = await getUser('customers', user[0]);//Aqui se puede remplazar el texto con un PROP
      setPrueba(usr[0][1]);
    } catch (error) {
      console.log(error);
    }
  }

  const deletingUser = async () => {
    try {
      await deleteUser('customers', user[0]);//Aqui se puede remplazar el texto con un PROP
    } catch (error) {
      console.log(error);
    }
    getingUsers()
  }

  const postingUser = async () => {
    try{
      await postUser("customers", {id:"502", name:"desconocido el we", phone:"12345678", address:"sahila asi es"})
    } catch (error) {
      console.log(error)
    }
  }

  const putingUser = async () => {
    try{
      await putUser("customers", "321", {id:"321", name:"desconocido el we", phone:"12345678", address:"sahila asi es"})
    } catch (error) {
      console.log(error)
    }
    getingUsers()
  }


  //Cosas extra

  const mostrarId = (index) => {
    setUser(users[index])
  }

  return (
    <div>
      <h1>{prueba}</h1>
      {users.length > 0 &&
        users.map((item, index) => <div key={index}>
          <br></br>
          <button id={item[0]} onClick={() => mostrarId(index)}>{item}</button>
        </div>)}
      <br></br>
      <Prueba user={user} eliminarUser={() => putingUser()} />

    </div>
  )
}

export default CustomersList
