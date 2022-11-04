import { useState } from 'react'
import CustomersList from './components/CustomersList'
import Nav from './components/nav'
import styles from './App.module.css'
import Header from './components/header'
import Orders from './components/orders'
import Customers from './components/customers'
import Employees from './components/emplyees'

function App() {
  const [count, setCount] = useState(0)
  const [main, setMain] = useState(<Employees />)


  return (
    <div className={styles.canvas}>
      <Nav  customers = {() => customers()}
            employees = {() => employees()}
            orders = {() => orders()} />
      <Header />
      {main}
    </div>
  )
}

export default App
