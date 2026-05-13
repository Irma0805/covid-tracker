import { useState } from 'react'
import CovidMap from '../../components/organisms/CovidMap/CovidMap'
import CountrySelector from '../../components/molecules/CountrySelector/CountrySelector'
import CountryStats from '../../components/molecules/CountryStats/CountryStats'
import axios from 'axios'

function Tracker1() {
    const [selectedCountry, setSelectedCountry] = useState('')
    const [countryData, setCountryData] = useState(null)

    const handleCountryChange = (country) => {
        setSelectedCountry(country)
        axios.get(`https://disease.sh/v3/covid-19/countries/${country}`)
            .then(res => setCountryData(res.data))
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <CountrySelector onCountryChange={handleCountryChange} />
                <span>Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
                <CountryStats data={countryData} />
                <CovidMap selectedCountry={selectedCountry} />
            </div>
        </div>
    )
}

export default Tracker1
