import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Layout from '../components/templates/Layout/Layout'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        {/* Las rutas de los trackers se añadirán cuando estén listos */}
      </Route>
    </Routes>
  )
}

export default AppRouter