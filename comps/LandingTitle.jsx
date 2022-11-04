import styles from '../styles/LandingTitle.module.css';

function LandingTitle() {
    return(<div className={styles.LandingTitle}>
        <p id={styles.LandingMainTitle}>PURASDEV{'[]'}</p>
        <p id={styles.LandingSubTitle}>A DIGITAL MIND DUMP FOR DEVELOPERS & TECH ENTHUSIASTS.</p>
    </div>);
}

export default LandingTitle;