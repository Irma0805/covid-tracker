import { useState, useEffect } from 'react'
import { getGlobalData, getAllCountries } from '../../../services/api'
import SidebarCard from '../../molecules/SidebarCard/SidebarCard'
import CountryRow from '../../molecules/CountryRow/CountryRow'
import styles from './Sidebar.module.css'

function Sidebar() {
  // useState — guardamos los datos que vienen de la API
  const [globalData, setGlobalData] = useState(null)
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  // useEffect — cuando el componente se carga, pedimos los datos
useEffect(() => {
  Promise.all([getGlobalData(), getAllCountries()])
    .then(([globalData, countriesData]) => {
      setGlobalData(globalData)              // ← sin .data
      setCountries(countriesData.slice(0, 10)) // ← sin .data
      setLoading(false)
    })
    .catch((error) => {
      console.error('Error cargando datos:', error)
      setLoading(false)
    })
}, [])
  // Mientras carga, mostramos un mensaje
  if (loading) return <aside className="sidebar"><p>Cargando datos...</p></aside>

  return (
    <aside className="sidebar">
      <h2 className={styles.title}>COVID-19 Tracker</h2>

      <div className={styles.cards}>
        <SidebarCard
          label="Total Case"
          value={globalData.cases}
          increment={globalData.todayCases}
          variant="total"
        />
        <SidebarCard
          label="Active Case"
          value={globalData.active}
          variant="active"
        />
        <SidebarCard
          label="Recovered Case"
          value={globalData.recovered}
          increment={globalData.todayRecovered}
          variant="recovered"
        />
        <SidebarCard
          label="Deaths Case"
          value={globalData.deaths}
          increment={globalData.todayDeaths}
          variant="deaths"
        />
      </div>

      <h3 className={styles.subtitle}>Top 10 Country</h3>

      <div className={styles.countryList}>
        {countries.map((country) => (
          <CountryRow
            key={country.country}
            name={country.country}
            flag={country.countryInfo.flag}
            cases={country.cases}
          />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar

