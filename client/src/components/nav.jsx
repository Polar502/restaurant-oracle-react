import styles from '../css/sections.module.css'
import menu from '../css/menu.module.css'
import MenuBtn from './menuBtn'

const Nav = () => {

  return (
    <nav className={styles.canvasNav}>
      <nav className={menu.logo}></nav>
      <MenuBtn text = 'Clientes' />
      <MenuBtn text = 'Empleados' />
      <MenuBtn text = 'Ordenes' />
    </nav>
  )

}

export default Nav