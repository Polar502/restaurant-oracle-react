import { useState, useEffect } from 'react'
import styles from '../css/sections.module.css'
import tables from '../css/tables.module.css'
import Filter from './filter'
import Search from './search'
import { getUser, getUsers, deleteUser, postUser, putUser } from '../api'

const Employees = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getingEmployees()
  }, [])

  //Funcion para traer a todos los empleados
  const getingEmployees = async () => {
    try {
      const usr = await getUsers('employees');//Aqui se puede remplazar el texto con un PROP
      setUsers(usr);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.canvasMain}>
      <div className={styles.canvasFilterDiv}>
        <Search objeto='Empleado' />
        <Filter objeto='empleados'
          btn1='Activos'
          btn2='Inactivos'
          btn3='Todos' />
      </div>
      <table className={tables.table} >
        <tbody className={tables.rows}>
          <tr className={tables.header}>
            <td className={tables.header}>ID</td>
            <td>NOMBRE</td>
            <td>TELEFONO</td>
            <td>DIRECCION</td>
            <td>ROL</td>
            <td>SALARIO</td>
            <td>ESTADO</td>
          </tr>
          {users.length > 0 &&
            users.map((item, index) =>
              <tr key={index}>
                <td className={tables.rows}>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
                <td>{item[5]}</td>
                <td>{item[6]}</td>
              </tr>
            )}
        </tbody>
      </table>
    </main>
  )

}

export default Employees