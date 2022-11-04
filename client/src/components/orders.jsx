import styles from '../css/sections.module.css'
import Filter from './filter'
import Search from './search'

const Orders = () => {

  return (
    <main className={styles.canvasMain}>
      <div className={styles.canvasFilterDiv}>
        <Search objeto = 'Orden'/>
        <Filter objeto = 'ordenes'
                btn1 = 'Pendientes'
                btn2 = 'Entregadas'
                btn3 = 'Todas'/>
      </div>
    </main>
  )

}

export default Orders