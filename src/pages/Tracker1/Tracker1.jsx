import CovidMap from '../../components/organisms/CovidMap/CovidMap'

function Tracker1 () {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <div>
                {/* Aquí irá el selector de país y estadísticas */}
            </div>
            <CovidMap />
        </div>
    )
}

export default Tracker1

