import styles from '../css/filter.module.css'

const Filter = ({objeto, btn1, btn2, btn3}) => {
  return (
    <div className={styles.canvasFilter}>
      <label className={styles.title}>{`Mostrar ${objeto} por`}</label>
      <button className={styles.filterBtn}>{btn1}</button>
      <button className={styles.filterBtn}>{btn2}</button>
      <button className={styles.filterBtn}>{btn3}</button>
    </div>
  )
}

export default Filter