import {useState, useEffect } from 'react'
import axios from 'axios'

const CountrySelector = ({ onCountryChange }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/countries')
            .then(res => setCountries(res.data))
    }, [])      

    return (
        <select onChange={e => onCountryChange(e.target.value)} >
            {countries.map(country => (
                <option key={country.country} value={country.country}>
                    {country.country}
                </option>
            ))}
        </select>
    )
}

export default CountrySelector