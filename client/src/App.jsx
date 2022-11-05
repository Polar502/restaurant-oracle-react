import { useState } from 'react'
import CustomersList from './components/CustomersList'
import Nav from './components/nav'
import styles from './App.module.css'
import menu from './css/menu.module.css'
import Header from './components/header'
import Orders from './components/orders'
import Customers from './components/customers'
import Employees from './components/employees'

function App() {
  const [count, setCount] = useState(0)
  const [main, setMain] = useState(<Customers />)

  const changeInterface = (option) => {
    if (option === 'customers') {
      setMain(<Customers />)
      document.getElementById('btnClientes').className = menu.canvasBtnActive
      document.getElementById('btnEmpleados').className = menu.canvasBtn
      document.getElementById('btnOrdenes').className = menu.canvasBtn
    } else if (option === 'employees') {
      setMain(<Employees />)
      document.getElementById('btnClientes').className = menu.canvasBtn
      document.getElementById('btnEmpleados').className = menu.canvasBtnActive
      document.getElementById('btnOrdenes').className = menu.canvasBtn
    } else if (option === 'orders') {
      setMain(<Orders />)
      document.getElementById('btnClientes').className = menu.canvasBtn
      document.getElementById('btnEmpleados').className = menu.canvasBtn
      document.getElementById('btnOrdenes').className = menu.canvasBtnActive
    }
  }


  return (
    <div className={styles.canvas}>
      <Nav customers={() => changeInterface('customers')}
        employees={() => changeInterface('employees')}
        orders={() => changeInterface('orders')} />

      {main}
    </div>
  )
}

export default App
