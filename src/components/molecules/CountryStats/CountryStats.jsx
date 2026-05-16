import styles from './CountryStats.module.css'
import CovidIcon from '../../atoms/CovidIcon/CovidIcon'

const CountryStats = ({ data }) => {
    if (!data) return null

    return (
        <div className={styles.grid}>
            <div className={`${styles.card} ${styles.cases}`}>
                <p>Total Cases</p>
                <h3>{data.cases.toLocaleString()}</h3>
                <CovidIcon color="blue" />
            </div>
            <div className={`${styles.card} ${styles.deaths}`}>
                <p>Total Deaths</p>
                <h3>{data.deaths.toLocaleString()}</h3>
                <CovidIcon color="red" />
            </div>
            <div className={`${styles.card} ${styles.recovered}`}>
                <p>Total Recovered</p>
                <h3>{data.recovered.toLocaleString()}</h3>
                <CovidIcon color="orange" />
            </div>
            <div className={`${styles.card} ${styles.active}`}>
                <p>Total Active</p>
                <h3>{data.active.toLocaleString()}</h3>
                <CovidIcon color="green" />
            </div>
            <div className={`${styles.card} ${styles.newCases}`}>
                <p>New Cases</p>
                <h3>{data.todayCases.toLocaleString()}</h3>
                <CovidIcon color="redark" />
            </div>
            <div className={`${styles.card} ${styles.newDeaths}`}>
                <p>New Deaths</p>
                <h3>{data.todayDeaths.toLocaleString()}</h3>
                <CovidIcon color="red" />
            </div>
        </div>
    )
}

export default CountryStats
