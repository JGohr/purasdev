import styles from './Landing.module.css';
import LandingText from './LandingText.jsx';
import LandingSocials from './LandingSocials.jsx';

function Landing() {
    return(
        <div className={styles.Landing}>
            <LandingText />
            <LandingSocials />
        </div>
    );
}

export default Landing;