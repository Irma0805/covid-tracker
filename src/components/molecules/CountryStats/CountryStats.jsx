import { useState } from 'react'
import styles from './CountryStats.module.css'
import CovidIcon from '../../atoms/CovidIcon/CovidIcon'

const CountryStats = ({ data }) => {
    const [selected, setSelected] = useState(null)

    if (!data) return null

    return (
        <div className={styles.grid}>
            <div
                className={`${styles.card} ${styles.cases}`}
                onMouseEnter={() => setSelected('cases')}
                onMouseLeave={() => setSelected(null)}
            >
                <p>Total Cases</p>
                <h3>{data.cases.toLocaleString()}</h3>
                <CovidIcon color="blue" spin={selected === 'cases'} />
            </div>
            <div
                className={`${styles.card} ${styles.deaths}`}
                onMouseEnter={() => setSelected('deaths')}
                onMouseLeave={() => setSelected(null)}
            >
                <p>Total Deaths</p>
                <h3>{data.deaths.toLocaleString()}</h3>
                <CovidIcon color="red" spin={selected === 'deaths'} />
            </div>
            <div
                className={`${styles.card} ${styles.recovered}`}
                onMouseEnter={() => setSelected('recovered')}
                onMouseLeave={() => setSelected(null)}
            >
                <p>Total Recovered</p>
                <h3>{data.recovered.toLocaleString()}</h3>
                <CovidIcon color="green" spin={selected === 'recovered'} />
            </div>
            <div
                className={`${styles.card} ${styles.active}`}
                onMouseEnter={() => setSelected('active')}
                onMouseLeave={() => setSelected(null)}
            >
                <p>Total Active</p>
                <h3>{data.active.toLocaleString()}</h3>
                <CovidIcon color="blue" spin={selected === 'active'} />
            </div>
            <div
                className={`${styles.card} ${styles.newCases}`}
                onMouseEnter={() => setSelected('newCases')}
                onMouseLeave={() => setSelected(null)}
            >
                <p>New Cases</p>
                <h3>{data.todayCases.toLocaleString()}</h3>
                <CovidIcon color="orange" spin={selected === 'newCases'} />
            </div>
            <div
                className={`${styles.card} ${styles.newDeaths}`}
                onMouseEnter={() => setSelected('newDeaths')}
                onMouseLeave={() => setSelected(null)}
            >
                <p>New Deaths</p>
                <h3>{data.todayDeaths.toLocaleString()}</h3>
                <CovidIcon color="redark" spin={selected === 'newDeaths'} />
            </div>
        </div>
    )
}

export default CountryStats
