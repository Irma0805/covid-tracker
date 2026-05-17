# COVID Tracker

Aplicación web para el seguimiento de datos de COVID-19 en tiempo real por país y a nivel global.

## Equipo

Proyecto desarrollado por 4 personas en el bootcamp FemCoders.

👩 Irma Ortiz 👩 Carmen Lareo 👩Kharla Quevedo 👩 Lia Fernández

## Tecnologías

- **React 19** + **Vite**
- **React Router DOM** — navegación entre páginas
- **Leaflet** + **React Leaflet** — mapa interactivo con círculos por país
- **Axios** — llamadas a la API
- **CSS Modules** — estilos encapsulados por componente
- **disease.sh API** — datos de COVID-19 en tiempo real

## Funcionalidades

- Mapa mundial interactivo con círculos proporcionales a los casos por país
- Selector de país con estadísticas detalladas (casos, muertes, recuperados, activos)
- Barra global con totales mundiales
- Top 10 países con más casos
- Sección de síntomas
- Iconos animados al hacer hover en las tarjetas

## Estructura del proyecto

```
src/
├── assets/          # Imágenes e iconos SVG
├── components/
│   ├── atoms/       # CovidIcon, Logo
│   ├── molecules/   # CountryStats, CountrySelector, CountryRow, SymptomCard
│   ├── organisms/   # CovidMap, Sidebar, GlobalBar, SymptomSection
│   └── templates/   # Layout
├── pages/           # Home, Tracker1, Tracker3
├── router/          # AppRouter
├── services/        # Llamadas a la API
└── styles/          # global.css con variables y reset
```

## Instalación

```bash
npm install
npm run dev
```

## API utilizada

[disease.sh](https://disease.sh) — API pública de datos COVID-19.

