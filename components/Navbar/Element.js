import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

export default function Element(props) {

    return (
        <div>
            <Link href={props.href}>
                <code className={styles.list}>
                    {props.label}
                </code>
            </Link>
        </div>

    )
}