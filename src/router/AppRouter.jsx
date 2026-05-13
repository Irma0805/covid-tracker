import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Layout from '../components/templates/Layout/Layout'
import Tracker1 from '../pages/Tracker1/Tracker1'


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
          <Route path="/tracker-1" element={<Tracker1 />} />
        {/* Las rutas de los trackers se añadirán cuando estén listos */}
      </Route>
    </Routes>
  )
}

export default AppRouter