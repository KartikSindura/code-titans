import styles from '../../styles/Navbar.module.css'
import Navigation from './Navigation'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Navigation/>
        </div>
    )
}