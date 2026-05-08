import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
} 

export default App

/*Línea 1: import { Routes, Route } from 'react-router-dom'
Importamos dos herramientas de navegación. Routes es como un mapa de carreteras — contiene todas las rutas posibles. Route es cada carretera individual.
Línea 2: import Home from './pages/Home/Home'
Le decimos a React "necesito el componente Home que vive en la carpeta pages/Home". El ./ significa "desde la carpeta actual (src)".
Línea 4: function App() {
Creamos el componente principal de la app. App es el jefe — decide qué se muestra en pantalla.
Líneas 5-9: return ( <Routes>...</Routes> )
El componente devuelve HTML. Dentro de <Routes> definimos las rutas:
Línea 7: <Route path="/" element={<Home />} />
Esto dice: "cuando la URL sea / (la raíz, o sea localhost:5173/), muestra el componente <Home />". Es como decir "si el usuario va a la puerta principal, enséñale la Home".
Línea 12: export default App
Exportamos el componente para que main.jsx puedo usarlo. Sin esta línea, main.jsx no encontraría App.
Ahora el navegador dará error porque pages/Home/Home.jsx no existe todavía. Vamos a crearlo con un placeholder para que la app funcione.
vamos a crear el archivo Home.jsx dentro de pages/Home*/