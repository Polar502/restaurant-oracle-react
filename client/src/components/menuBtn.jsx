import styles from '../css/menu.module.css'

const MenuBtn = ({text, action}) => {

  return (
    <button id={`btn${text}`} onClick={() => action()} className={styles.canvasBtn}>
      {text}
    </button>
  )

}

export default MenuBtn