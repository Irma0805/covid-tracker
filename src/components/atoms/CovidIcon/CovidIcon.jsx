import styles from './CovidIcon.module.css'
import covidBlue from '../../../assets/images/icons/covid-blue.svg'
import covidRed from '../../../assets/images/icons/covid-red.svg'
import covidGreen from '../../../assets/images/icons/covid-green.svg'
import covidOrange from '../../../assets/images/icons/covid-orange.svg'
import covidRedark from '../../../assets/images/icons/covid-redark.svg'

const icons = {
    blue: covidBlue,
    red: covidRed,
    green: covidGreen,
    orange: covidOrange,
    redark: covidRedark,
}

const CovidIcon = ({ color }) => {
    return <img src={icons[color]} alt="covid icon" className={styles.icon} />
}

export default CovidIcon
