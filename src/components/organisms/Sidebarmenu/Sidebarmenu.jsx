import React from 'react'
import styles from './Sidebarmenu.module.css'
import logocoronavirus from '../../../assets/images/coronavirus.png'


function SidebarMenu() {
    return (
        <div>
       <h4>Covid-19</h4>
            <nav className="navbarlateral">

                <ul className="navbar_menu">
                    <li className="logo-menu"><img src="src/assets/images/coronavirus.png" alt="logo" width="50%" /></li>
                    <li><a href="#track1" className="btn btn1"></a></li>
                    <li><a href="#track2" className="btn btn2"></a></li>
                    <li><a href="#track3" className="btn btn3"></a></li>
                    <li><a href="#track4" className="btn btn4"></a></li>
                    <li><a href="#track5" className="btn btn5"></a></li>
                    <li><a href="#" className="btn btn6"></a></li>
                    <li><a href="#" className="btn btn7"></a></li>
                    <li><a href="#" className="btn btn8"></a></li>
                    <li><a href="#" className="btn btn9"></a></li>
                </ul>
            </nav>
       

        </div>
    )
}

export default Sidebarmenu