import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import axios from 'axios'

const CovidMap = () => {
    const mapRef = useRef(null)
    const mapInstanceRef = useRef(null)

    useEffect(() => {
        if (mapInstanceRef.current) return  

        mapInstanceRef.current = L.map(mapRef.current).setView([20, 0], 4)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 18,
        }).addTo(mapInstanceRef.current)

        axios.get('https://disease.sh/v3/covid-19/countries')
            .then(res => {
                res.data.forEach(country => {
                    const { lat, long } = country.countryInfo
                    L.circle([lat, long], {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.4,
                        radius: Math.sqrt(country.cases) * 50
                    })
                    .bindPopup(`<b>${country.country}</b><br>Casos: ${country.cases.toLocaleString()}`)
                    .addTo(mapInstanceRef.current)
                })
            })

        return () => {
            mapInstanceRef.current.remove()
            mapInstanceRef.current = null
        }
    }, [])

    return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />
}

export default CovidMap
