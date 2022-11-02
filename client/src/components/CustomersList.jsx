import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Prueba from './prueba'
import { deleteUser } from '../api'

const CustomersList = (prompt) => {
  const [data, setData] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    axios('http://localhost:5000/customers')
      .then((response) => {
        if (response.status === 200) {
          const fetchData = response.data
          setData(fetchData)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const mostrarId = (index) => {
    setUser(data[index])
  }

  async function eliminarUser() {
    console.log('Hola')
     
      
      await deleteUser(user[0]);
      console.log('Hecho')
    
  }

  return (
    <div>
      <h1>CustomersList Component</h1>
      {data.length > 0 &&
        data.map((item, index) => <div key={index}>
          <br></br>
          <button id={item[0]} onClick={() => mostrarId(index)}>{item}</button>
          </div>)}
          <br></br>
      <Prueba user = {user} eliminarUser={() => eliminarUser()}/>
    </div>
  )
}

export default CustomersList
