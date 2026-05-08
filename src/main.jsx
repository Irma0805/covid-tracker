import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </StrictMode>,
)

/*Línea 1: import { StrictMode } from 'react'
//Importa una herramienta de React que te avisa de errores en la consola. No afecta a lo que ve el usuario, es solo para ayudarte mientras desarrollas.
//Línea 2: import { createRoot } from 'react-dom/client'
Es la función que "engancha" React al HTML. Tu archivo index.html tiene un <div id="root"> vacío, y createRoot le dice a React "pinta todo dentro de ese div".
Línea 3: import { BrowserRouter } from 'react-router-dom'
NUEVO. Esto activa la navegación. Sin esta línea, no puedes tener rutas como /tracker-1 o /tracker-3. Es como instalar las puertas de la casa — sin puertas no puedes ir de una habitación a otra.
Línea 4: import './styles/global.css'
CAMBIÓ. Antes cargaba index.css (el archivo de Vite por defecto). Ahora carga nuestro global.css con los colores del mockup y el reset. Aquí es donde se conecta el archivo que acabamos de crear.
Líneas 6-12: createRoot(...).render(...)
Esto enciende la app. Le dice: "busca el div con id root en el HTML, y pinta dentro todo lo que hay entre las etiquetas". El orden importa:

<StrictMode> envuelve todo para detectar errores
<BrowserRouter> envuelve todo para que funcionen las rutas
<App /> es tu aplicación — el componente principal
Ahora si miras el navegador probablemente verás un error o la pantalla en blanco — es normal, porque global.css cambia los estilos y aún no hemos modificado App.jsx*/