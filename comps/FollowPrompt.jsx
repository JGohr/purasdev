import styles from './FollowPrompt.module.css';


function FollowPrompt() {
    return(<div className={styles.container}>
        <h1>Enjoy The Content?</h1>
        <h2>Consider Following The Blog!</h2>
        <form className={styles.formPrompt}>
            <p className='color-span'>Email</p>
            <input type='email' name='email' />
            <input type='submit' value='Follow' />
        </form>
    </div>)
};

export default FollowPrompt;