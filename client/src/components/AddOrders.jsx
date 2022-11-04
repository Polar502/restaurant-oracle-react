import styles from '../css/add.module.css'
import { getUser, getUsers, deleteUser, postUser, putUser } from '../api'

const AddOrders = () => {

  const postingUser = async () => {
    var id = document.getElementById('id').value
    var type = document.getElementById('type').value
    var total = document.getElementById('address').value

    try {
      await postUser("orders", { id: id ,type: type, total: total})
    } catch (error) {
      console.log(error)
    }
    window.location.reload()
  }

//   "INSERT INTO orders (c_id, o_type, o_total, o_status) VALUES (:id, :type, :total, 'PENDIENTE')",

  return (
    <div className={styles.canvas}>
      <div className={styles.grid}>
        <label htmlFor="" className={styles.title}>ID CLIENTE</label>
        <label htmlFor="" className={styles.title}>TIPO DE ORDEN</label>
        <label htmlFor="" className={styles.title}>TOTAL</label>  
        <input id='id' type='text' className={styles.input}></input>
        <input id='type' type='text' className={styles.input}></input>
        <input id='total' type='text' className={styles.input}></input>
      </div>
      <button className={styles.btn} onClick={() => postingUser()} >Insertar</button>
    </div>
  )

}

export default AddOrders