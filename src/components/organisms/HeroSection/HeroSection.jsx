import styles from './HeroSection.module.css'
import heroImg from'../../../assets/images/banner-right-image1.png'

function HeroSection() {
  return (
    <section className={styles.hero}>

      {/* --- NAVBAR --- */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          🦠 COVIMAP
        </div>

        <div className={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#prevention">Prevention</a>
          <a href="#quarantine">Quarantine</a>
          <a href="#pages">Pages</a>
          <a href="#about">About</a>
          <a href="#help">Help</a>
        </div>

        <a href="/tracker-1" className={styles.trackerBtn}>
          Tracker
        </a>
      </nav>

      {/* --- CONTENIDO DEL HERO --- */}
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
            <span className={styles.flag}>🇪🇸</span>
            <span className={styles.counterNumber}>9779130</span>
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

    </section>
  )
}

export default HeroSection

