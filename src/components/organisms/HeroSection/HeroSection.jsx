import { Link } from 'react-router-dom'
import styles from './HeroSection.module.css'
import heroImg from '../../../assets/images/banner-right-image1.png'
import Logo from '../../atoms/Logo/Logo'

function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* --- NAVBAR --- */}
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#prevention">Prevention</a></li>
          <li><a href="#quarantine">Quarantine</a></li>
          <li><a href="#pages">Pages</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#help">Help</a></li>
        </ul>

        <Link to="/tracker-1" className={styles.trackerBtn}>
          Tracker
        </Link>
      </nav>

      {/* --- CONTENIDO --- */}
      <div className={styles.content}>

        <div className={styles.textSide}>
          <h1 className={styles.title}>
            Stay Home, And Prayer For Victim Of Corona virus.
          </h1>

          <p className={styles.description}>
            Human coronaviruses are common and are typically associated with
            mild illnesses, similar to the common cold. The corona virus COVID-19
            is affecting 210 countries & territories around the world and 2
            international conveyances.
          </p>

          <div className={styles.counter}>
            <img
              src="https://disease.sh/assets/img/flags/es.png"
              alt="España"
              className={styles.flag}
            />
            <div className={styles.counterData}>
              <span className={styles.counterNumber}>9.779.130</span>
              <div className={styles.badges}>
                <span className={styles.badgeGreen}>92.965</span>
                <span className={styles.badgeBlue}>5.839.859</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageSide}>
          <img
            src={heroImg}
            alt="Persona con síntomas de COVID"
            className={styles.heroImage}
          />
        </div>

      </div>

      <div className={styles.socialSide}>
  <a href="#" className={styles.socialBtn}>
    <i className="fas fa-share-alt"></i>
  </a>
  <a href="#" className={styles.socialBtn}>
    <i className="fas fa-phone"></i>
  </a>
  <a href="#" className={styles.socialBtn}>
    <i className="fas fa-lock"></i>
  </a>
</div>

    </section>
  )
}

export default HeroSection