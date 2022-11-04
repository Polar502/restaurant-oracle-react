import styles from '../css/search.module.css'

const Search = ({objeto}) => {
  return (
    <div className={styles.canvasSearch}>
      <label className={styles.title}>{`Buscar ${objeto}`}</label>
      <input type='text' name='buscar' className={styles.searchForm}></input>
      <button className={styles.searchBtn}>Buscar</button>
    </div>
  )
}

export default Search