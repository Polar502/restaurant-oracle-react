import styles from '../css/menu.module.css'

const MenuBtn = ({text}) => {

  return (
    <button className={styles.canvasBtn}>
      {text}
    </button>
  )

}

export default MenuBtn