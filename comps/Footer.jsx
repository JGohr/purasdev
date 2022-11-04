function Footer() {
    return(<div className="layout-footer">
        <div className="footer-copy">
            <p>STAY NOTIFIED FOR <br/> FUTURE DEVLOGS.</p>
            <p>QUALITY CONTENT, <br/> NO SPAM.</p>
        </div>
        <div className="footer-follow">
            <p id="follow-newsletter-title">FOLLOW PURASDEV NEWSLETTER</p>
            <form className="follow-newsletter-form">
                <input id="newsletter-email-input" placeholder="PURASDEV@EMAIL.COM" />
                <input id="submit-newsletter" type="submit" value="FOLLOW" />
            </form>
            <div className="follow-agreement">
                <input type="checkbox" />
                <p id="follow-agreement-copy">I accept to recieve emails about future postings from purasdev.
                I understand I can un-follow whenever I please.</p>
            </div>
        </div>
    </div>);
}

export default Footer;