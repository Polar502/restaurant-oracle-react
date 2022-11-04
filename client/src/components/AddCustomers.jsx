import styles from '../css/add.module.css'
import { getUser, getUsers, deleteUser, postUser, putUser } from '../api'

const AddCustomers = () => {

  const postingUser = async () => {
    var name = document.getElementById('name').value
    var phone = document.getElementById('phone').value
    var address = document.getElementById('address').value
    // var status = document.getElementById('status').value

    try {
      await postUser("customers", { name: name, phone: phone, address: address })
    } catch (error) {
      console.log(error)
    }
    window.location.reload()
  }

  // "INSERT INTO customers (c_name, c_phone, c_address, c_status) VALUES (:name , :phone , :address , 'ACTIVO')"

  return (
    <div className={styles.canvas}>
      <div className={styles.grid}>
        <label htmlFor="" className={styles.title}>NOMBRE</label>
        <label htmlFor="" className={styles.title}>TELEFONO</label>
        <label htmlFor="" className={styles.title}>DIRECCION</label> 
        {/* <label htmlFor="" className={styles.title}>ESTADO</label>  */}
        <input id='name' type='text' className={styles.input}></input>
        <input id='phone' type='text' className={styles.input}></input>
        <input id='address' type='text' className={styles.input}></input>
        {/* <input id='status' type='text' className={styles.input}></input> */}
      </div>
      <button onClick={() => postingUser()} className={styles.btn}>Insertar</button>
    </div>
  )

}

export default AddCustomers