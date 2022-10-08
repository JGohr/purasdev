import styles from './LandingSocials.module.css';
import { FaGithub, FaTwitter, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa';

function LandingSocials() {
    return(
        <div className={styles.LandingSocials}>
            <FaGithub className={styles.LandingSocialsGithub} />
            <FaTwitter className={styles.LandingSocialsTwitter} />
            <FaTiktok className={styles.LandingSocialsTiktok} />
            <FaYoutube className={styles.LandingSocialsYoutube} />
            <FaLinkedin className={styles.LandingSocialsLinkedin} />
        </div>
    );
}

export default LandingSocials;