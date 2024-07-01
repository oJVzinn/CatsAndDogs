import styles from "./Footer.module.css"

function Footer( {logo} ) {
    let currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div >
                <h2 style={{margin: 0}}>Créditos</h2>
                <p id={styles.copyright}>Desenvolvido com ❤️ por João Victor<br/>&copy; Cats&Dogs 2024 - {currentYear}</p>
            </div>
            
            <div>
                <img src={`/images/${logo}.png`} alt="logo" style={{height: '100px', width: '200px'}}/>
            </div>

            <div>
                <h2 style={{margin: 0}}>Rede Sociais</h2>
                <ul id={styles.social_media}>
                    <li><a href="https://youtube.com" className={styles.social_media_item}>YouTube</a></li>
                    <li><a href="https://instagram.com" className={styles.social_media_item}>Instagram</a></li>
                    <li><a href="https://twitter.com" className={styles.social_media_item}>Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;