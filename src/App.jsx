import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Tracker1 from './pages/Tracker1/Tracker1'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tracker-1" element={<Tracker1 />} />
    </Routes>
  )
}

export default App
