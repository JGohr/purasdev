import styles from './Header.module.css';
import Link from 'next/link';

function Header() {

    return(
    <div className={styles.Header}>
        <Link href='/'>
            <h1 className={styles.HeaderLogo}>purasdev{'[]'}</h1>
        </Link>
        <Link href='/follow'>
            <button className={styles.HeaderFollow}>Follow</button>
        </Link>
    </div>
    );
};

export default Header;