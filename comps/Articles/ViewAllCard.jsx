import styles from './ViewAllCard.module.css';
import Link from 'next/link';

function ViewAllCard({ frontmatter, slug, index }) {

    return(<div className={styles.container}>
        <div className={styles.col1}>
            <p className={`color-span ${styles.cardIndex}`}>purasdev[{index}]</p>
            <p>{frontmatter.date}</p>
        </div>
        <div className={styles.col2}>
            <Link href={`/articles/${slug}`}>
                <h1>{frontmatter.title}</h1>
            </Link>
            <p>{frontmatter.desc}</p>
            <p className='color-span'>{frontmatter.tags}</p>
        </div>
    </div>);
};

export default ViewAllCard;