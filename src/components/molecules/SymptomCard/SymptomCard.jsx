import styles from "./SymptomCard.module.css"

const SymptomCard = ({ icon, title, description }) => {
    return (
        <div className={styles.card}>
            <img src={icon} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    ) 
}

export default SymptomCard 