import styles from '../css/sections.module.css'
import menu from '../css/menu.module.css'
import MenuBtn from './menuBtn'

const Nav = ({customers, employees, orders}) => {

  const changeInterface = (option) => {
    if (option === 'customers') {
      customers()
    } else if (option === 'employees') {
      employees()
    } else if (option === 'orders') {
      orders()
    }
  }

  return (
    <nav className={styles.canvasNav}>
      <nav className={menu.logoArea}>
        <img src='../../public/img/logo.png' alt='Logo' className={menu.logo} />
      </nav>
      <MenuBtn text = 'Clientes' 
                action = {() => changeInterface('customers')} />
      <MenuBtn text = 'Empleados' 
                action = {() => changeInterface('employees')} />
      <MenuBtn text = 'Ordenes'
                action = {() => changeInterface('orders')} />
    </nav>
  )

}

export default Nav