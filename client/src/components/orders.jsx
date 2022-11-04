import { useState, useEffect } from 'react'
import styles from '../css/sections.module.css'
import tables from '../css/tables.module.css'
import footer from '../css/footer.module.css'
import Filter from './filter'
import Search from './search'
import {
  getUser,
  getUsers,
  getOrders,
  deleteUser,
  postUser,
  putUser,
} from '../api'
import AddOrders from './AddOrders'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [add, setAdd] = useState()

  useEffect(() => {
    getingOrders()
  }, [])

  //Funcion para traer a todos las ordenes
  const getingOrders = async () => {
    try {
      const ord = await getOrders('orders') //Aqui se puede remplazar el texto con un PROP
      setOrders(ord)
    } catch (error) {
      console.log(error)
    }
  }

  const addUser = (usr) => {
    setAdd(<AddOrders />)
  }

  return (
    <main className={styles.canvasMain}>
      <div className={styles.canvasFilterDiv}>
        <Search objeto="Orden" />
        <Filter
          objeto="ordenes"
          btn1="Pendientes"
          btn2="Entregadas"
          btn3="Todas"
        />
      </div>
      <table className={tables.table}>
        <tbody className={tables.rows}>
          <tr className={tables.header}>
            <td className={tables.header}>ID</td>
            <td>CLIENTES</td>
            <td>TIPO</td>
            <td>ESTADO</td>
            <td>TOTAL</td>
          </tr>
          {orders.length > 0 &&
            orders.map((item, index) => (
              <tr key={index}>
                <td className={tables.rows}>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{`Q ${item[4]}.00`}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className={footer.canvas}>
        <button className={footer.delete}>Eliminar</button>
        <button className={footer.update}>Actualizar</button>
        <button className={footer.create} onClick={() => addUser('orders')}>
          Agregar
        </button>
      </div>
      {add}
    </main>
  )
}

export default Orders
