import { MapConteiner, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const CovidMap = () => {
    return (
        <MapConteiner
            center={[51.505, -0.09]}
            zoom={2}
            style={{ height: '500px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            </MapConteiner>
    )
}

export default CovidMap