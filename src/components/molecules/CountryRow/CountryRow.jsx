import styles from './CountryRow.module.css'

function CountryRow({ name, flag, cases }) {
  return (
    <div className={styles.row}>
      <div className={styles.info}>
        <img src={flag} alt={name} className={styles.flag} />
        <span className={styles.name}>{name}</span>
      </div>
      <span className={styles.cases}>{cases.toLocaleString()}</span>
    </div>
  )
}

export default CountryRow