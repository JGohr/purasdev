import styles from './FollowPrompt.module.css';


function FollowPrompt() {
    return(<div className={styles.container}>
        <h1>Enjoy the content?</h1>
        <h2>Consider following the blog!</h2>
        <p>Following simply enrolls you to receieve updates on new posts. No spam & the 
            option to unsubscribe whenever you please.
        </p>
        <form className={styles.formPrompt}>
            <p className='color-span'>Email</p>
            <input className={styles.promptInput} type='email' name='email'
            placeholder='purasdev@email.com' />
            <input className={styles.promptSubmit} type='submit' value='Follow' />
        </form>
    </div>)
};

export default FollowPrompt;