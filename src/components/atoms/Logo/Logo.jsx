// atoms/Logo/Logo.jsx
import styles from './Logo.module.css'
import logoImg from '../../../assets/images/logo-white.png'

function Logo({ className }) {
  return (
    <img
      src={logoImg}
      alt="COVIMAP"
      className={`${styles.logo} ${className || ''}`}
    />
  )
}

export default Logo