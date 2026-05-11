import styles from './Footer.module.css'
import logoWhite from '../../../assets/images/logo-white.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>

                {/* Columna del logo */}
                <div className={styles.brand}>
                    <h3 className={styles.logo}>
                        <img src={logoWhite} alt="COVIMAP" className={styles.logoImg} />
                    </h3>
                    <p className={styles.brandText}>
                        These droplets can land on objects and surfaces around the person
                        such as tables, doorknobs and handrails.
                    </p>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialIcon}><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className={styles.socialIcon}><i className="fab fa-twitter"></i></a>
                        <a href="#" className={styles.socialIcon}><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className={styles.socialIcon}><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                {/* Columna Quick Links */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Quick Links</h4>
                    <ul className={styles.links}>
                        <li><a href="#">Prevention</a></li>
                        <li><a href="#">Quarantine</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>

                {/* Columna About */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>About</h4>
                    <ul className={styles.links}>
                        <li><a href="#">Hand Wash</a></li>
                        <li><a href="#">Social Distance</a></li>
                        <li><a href="#">Isolate</a></li>
                        <li><a href="#">Difference</a></li>
                    </ul>
                </div>

                {/* Columna About 2 */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>About</h4>
                    <ul className={styles.links}>
                        <li><a href="#">Hand Wash</a></li>
                        <li><a href="#">Social Distance</a></li>
                        <li><a href="#">Isolate</a></li>
                        <li><a href="#">Difference</a></li>
                    </ul>
                </div>

                {/* Columna Help */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Help</h4>
                    <ul className={styles.links}>
                        <li><a href="#">Hand Wash</a></li>
                        <li><a href="#">Social Distance</a></li>
                        <li><a href="#">Isolate</a></li>
                        <li><a href="#">Difference</a></li>
                    </ul>
                </div>

            </div>

            {/* Barra inferior */}
            <div className={styles.bottom}>
                <p>© Copyright 2020. All Rights Reserved</p>
                <p>Design by <span className={styles.highlight}>DexignZone</span></p>
            </div>

        </footer>
    )
}

export default Footer

/*fab significa "Font Awesome Brands" — la categoría de iconos de marcas/redes sociales. Cada fa-facebook-f, fa-twitter, etc. es un icono específico.
*/