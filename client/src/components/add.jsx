import styles from '../css/add.module.css'
import { getUser, getUsers, deleteUser, postUser, putUser } from '../api'

const Add = () => {

  const postingUser = async () => {
    var id = document.getElementById('id').value
    var name = document.getElementById('name').value
    var phone = document.getElementById('phone').value
    var address = document.getElementById('address').value

    try {
      await postUser("customers", { id: id, name: name, phone: phone, address: address })
    } catch (error) {
      console.log(error)
    }
    window.location.reload()
  }

  return (
    <div className={styles.canvas}>
      <div className={styles.grid}>
        <label htmlFor="" className={styles.title}>ID</label>
        <label htmlFor="" className={styles.title}>NOMBRE</label>
        <label htmlFor="" className={styles.title}>TELEFONO</label>
        <label htmlFor="" className={styles.title}>DIRECCION</label>
        <input id='id' type='text' className={styles.input}></input>
        <input id='name' type='text' className={styles.input}></input>
        <input id='phone' type='text' className={styles.input}></input>
        <input id='address' type='text' className={styles.input}></input>
      </div>
      <button onClick={() => postingUser()} className={styles.btn}>Insertar</button>
    </div>
  )

}

export default Add