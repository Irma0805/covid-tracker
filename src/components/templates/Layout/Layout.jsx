import { Outlet } from 'react-router-dom'
import Sidebar from '../../organisms/Sidebar/Sidebar'
import styles from './Layout.module.css'

function Layout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout