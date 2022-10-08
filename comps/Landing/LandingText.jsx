import styles from './LandingText.module.css';
import Link from 'next/link';

function LandingText() {
    return(
        <div className={styles.LandingText}>
            <p className={styles.LandingTextTrans}>
            posts <span className='color-span'>purasdev</span> = new 
            <span className='color-span'>Array</span>{'[];'} <br/>
            <span className='color-span'>purasdev</span>.push(allPosts);
            </p>
            <h1 className={styles.LandingTextHeader}>purasdev{'[]'}</h1>
            <p className={styles.LandingTextSubHeader}>
            a digital mind dump for developers, creatives and tech enthusiasts
            </p>
            <Link href='/articles/'>
                <a className={styles.LandingTextViewAll}>View All Articles {'>'}</a>
            </Link>
        </div>
    );
}

export default LandingText;