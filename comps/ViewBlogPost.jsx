import styles from './ViewBlogPost.module.css';

function ViewBlogPost(props) {

    return(
    <div className={styles.container}>
        <div className={styles.intro}>
            <p>{props.tags} - {props.date}</p>
            <h1 className={styles.title}>{props.title}</h1>
            <h3>{props.desc}</h3>
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{__html: props.body}} />
    </div>
    );
}

export default ViewBlogPost;