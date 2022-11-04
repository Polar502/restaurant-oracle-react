import { useState, useEffect } from 'react'
import styles from '../css/sections.module.css'
import tables from '../css/tables.module.css'
import footer from '../css/footer.module.css'
import Filter from './filter'
import Search from './search'
import { getUser, getUsers, deleteUser, postUser, putUser } from '../api'
import AddCustomers from './AddCustomers'

const Customers = () => {
  const [users, setUsers] = useState([])
  const [add, setAdd] = useState()

  useEffect(() => {
    getingCustomers()
  }, [])

  //Funcion para traer a todos los empleados
  const getingCustomers = async () => {
    try {
      const usr = await getUsers('customers') //Aqui se puede remplazar el texto con un PROP
      setUsers(usr)
    } catch (error) {
      console.log(error)
    }
  }

  const addUser = (usr) => {
    setAdd(<AddCustomers />)
  }

  return (
    <main className={styles.canvasMain}>
      <div className={styles.canvasFilterDiv}>
        <Search objeto="Cliente" />
        <Filter
          objeto="clientes"
          btn1="Activos"
          btn2="Inactivos"
          btn3="Todos"
        />
      </div>
      <table className={tables.table}>
        <tbody className={tables.rows}>
          <tr className={tables.header}>
            <td className={tables.header}>ID</td>
            <td>NOMBRE</td>
            <td>TELEFONO</td>
            <td>DIRECCION</td>
            <td>ESTADO</td>
          </tr>
          {users.length > 0 &&
            users.map((item, index) => (
              <tr key={index}>
                <td className={tables.rows}>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className={footer.canvas}>
        <button className={footer.delete}>Eliminar</button>
        <button className={footer.update}>Actualizar</button>
        <button className={footer.create} onClick={() => addUser('customer')}>
          Agregar
        </button>
      </div>
      {add}
    </main>
  )
}

export default Customers
