import styles from '../css/sections.module.css'
import Filter from './filter'
import Search from './search'

const Customers = () => {

  return (
    <main className={styles.canvasMain}>
      <div className={styles.canvasFilterDiv}>
        <Search objeto='Cliente' />
        <Filter objeto='clientes'
                btn1='Pendiente'
                btn2='Entregado'
                btn3='Todos' />
      </div>
    </main>
  )

}

export default Customers