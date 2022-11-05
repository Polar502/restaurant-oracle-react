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
  const [main, setMain] = useState(<Employees />)

  const changeInterface = (option) => {
    if (option === 'customers') {
      setMain(<Customers />)
      //document.getElementById('btnCliente').className = menu.canvasBtnActive
    } else if (option === 'employees') {
      setMain(<Employees />)
      //document.getElementById('btnEmpleado').className = menu.canvasBtnActive
    } else if (option === 'orders') {
      setMain(<Orders />)
      console.log(document.getElementById('btnOrdenes').className)
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
