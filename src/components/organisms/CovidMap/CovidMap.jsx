import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const CovidMap = () => {
    const mapRef = useRef(null)
    const mapInstanceRef = useRef(null)

    useEffect(() => {
        if (mapInstanceRef.current) return

        mapInstanceRef.current = L.map(mapRef.current).setView([20, 0], 2)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 18,
        }).addTo(mapInstanceRef.current)

        return () => {
            mapInstanceRef.current.remove()
            mapInstanceRef.current = null
        }
    }, [])

    return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />
}

export default CovidMap
