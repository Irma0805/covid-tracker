import styles from './SidebarCard.module.css'

function SidebarCard({ label, value, increment, variant }) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        {increment !== undefined && (
          <span className={styles.increment}>+{increment.toLocaleString()}</span>
        )}
      </div>
      <span className={`${styles.value} ${styles['value_' + variant]}`}>
        {value.toLocaleString()}
      </span>
    </div>
  )
}

export default SidebarCard