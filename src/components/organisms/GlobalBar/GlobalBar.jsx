import { useState, useEffect} from 'react'
import { getGlobalData } from '../../../services/api'
import styles from './GlobalBar.module.css'
import covidBlue from '../../../assets/images/icons/covid-blue.svg'
import covidGreen from '../../../assets/images/icons/covid-green.svg'
import covidRed from '../../../assets/images/icons/covid-red.svg'
import covidRedark from '../../../assets/images/icons/covid-redark.svg'
import callIcon from '../../../assets/images/icons/call.svg'

function GlobalBar(){

  const [globalData, setGlobalData] = useState(null)

  
  useEffect(() => {
    getGlobalData()
      .then(data => {
        setGlobalData(data)
      })
  }, [])

  
  if (!globalData) return <p>Cargando datos globales...</p>

 const stats = [
    { label: 'Total Confirmed', value: globalData.cases.toLocaleString('es-ES'), icon: covidBlue },
    { label: 'Total Recovered', value: globalData.recovered.toLocaleString('es-ES'), icon: covidGreen },
    { label: 'Total Deaths', value: globalData.deaths.toLocaleString('es-ES'), icon: covidRed },
    { label: 'New Deaths', value: globalData.todayDeaths.toLocaleString('es-ES'), icon: covidRedark },
    { label: 'Help Line No.', value: '198', icon: callIcon },
  ]

return (
    <div className={styles.globalBar}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.card}>
          <img src={stat.icon} alt={stat.label} className={styles.icon} />
      <div className={styles.cardText}>
        <span className={styles.label}>{stat.label}</span>
        <span className={styles.value}>{stat.value}</span>
          </div>
        </div>
      ))}
    </div>
  )

}



export default GlobalBar

