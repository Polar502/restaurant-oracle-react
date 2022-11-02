import styles from '../css/prueba.module.css'
import axios from 'axios'

const Prueba = ({user, eliminarUser}) => {

  return(
    <div className={styles.canvas}>
      <h1>Usuario seleccionado</h1>
      <h2>{user[1]}</h2>
      <button onClick={() => eliminarUser()}>Eliminar ID {user[0]}</button>
    </div>
  )
}

export default Prueba