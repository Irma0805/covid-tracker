import { Outlet } from 'react-router-dom'
import Sidebar from '../../organisms/Sidebar/Sidebar'
import styles from './Layout.module.css'
import SidebarMenu from '../../organisms/SidebarMenu/SidebarMenu'

function Layout() {
  return (
    <div className={styles.layout}>
     <SidebarMenu /> 
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout