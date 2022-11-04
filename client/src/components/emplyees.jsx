import styles from '../css/sections.module.css'
import Filter from './filter'
import Search from './search'

const Employees = () => {

  return (
    <main className={styles.canvasMain}>
      <div className={styles.canvasFilterDiv}>
        <Search objeto='Empleado' />
        <Filter objeto='empleados'
                btn1='Activo'
                btn2='Inactivo'
                btn3='Todos' />
      </div>
    </main>
  )

}

export default Employees