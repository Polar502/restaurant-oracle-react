import styles from '../css/add.module.css'
import { getUser, getUsers, deleteUser, postUser, putUser } from '../api'

const AddEmployees = () => {

  const postingUser = async () => {
    var name = document.getElementById('name').value
    var phone = document.getElementById('phone').value
    var address = document.getElementById('address').value
    var salary = document.getElementById('salary').value
    var job = document.getElementById('job').value

    try {
      await postUser("employees", { name: name, phone: phone, address: address, salary: salary, job: job})
    } catch (error) {
      console.log(error)
    }
    window.location.reload()
  }

//   "INSERT INTO employees (e_name, e_phone, e_address, e_salary, e_status, j_id) VALUES ( :name, :phone, :address, :salary, 'ACTIVO', :job)"

  return (
    <div className={styles.canvas}>
      <div className={styles.gridEmployees}>
        <label htmlFor="" className={styles.title}>NOMBRE</label>
        <label htmlFor="" className={styles.title}>TELEFONO</label>
        <label htmlFor="" className={styles.title}>DIRECCION</label> 
        <label htmlFor="" className={styles.title}>ROL</label> 
        <label htmlFor="" className={styles.title}>SALARIO</label> 
        <input id='name' type='text' className={styles.input}></input>
        <input id='phone' type='text' className={styles.input}></input>
        <input id='address' type='text' className={styles.input}></input>
        <input id='salary' type='text' className={styles.input}></input>
        <input id='job' type='text' className={styles.input}></input>
      </div>
      <button onClick={() => postingUser()} className={styles.btn}>Insertar</button>
    </div>
  )

}

export default AddEmployees