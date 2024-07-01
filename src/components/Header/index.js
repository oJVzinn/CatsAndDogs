import styles from "./Header.module.css"

function Header( {logo} ) {
    return(
        <header className={styles.header}>
            <div>
                <a href="#"><img src={`/images/${logo}.png`} alt="logo" style={{height: '100px', width: '200px'}}/></a>
                <span className={styles.header_name}>Cats&Dogs</span>
            </div>
            <nav>
                <ul id={styles.nav_itens}>
                    <li>
                        <a href="#" className={styles.nav_item}>Ínicio</a>
                    </li>
                    <li>
                        <a href="#" className={styles.nav_item}>Serviços</a>
                    </li>
                    <li>
                        <a href="#" className={styles.nav_item}>Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 