import React from 'react'
import styles from './Icons.module.css'


function Icons() {
    return (
        
        <div className={styles.container}>
<ul>
              <a href="#arrow">
                <li className={styles.circlered}></li>
              </a>
              <a href="#helmets">
                <li className={styles.circleblue}></li>
              </a>
              <a href="#cart">
                <li className={styles.circlegreen}></li>
              </a>
                </ul>

         
        </div>

      
    )
}

export default Icons