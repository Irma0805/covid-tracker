import "./SymptomCard.css"

const SymptomCard = ({ icon, title, description }) => {
    return (
        <div className="card">
            <img src={icon} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    ) 
}

export default SymptomCard 