import styles from "./Header.module.css"

function Header( {logo} ) {
    return(
        <header className={styles.header}>
            <div>
                <span>Cats&Dogs</span>
                <a href="#"><img src={`/images/${logo}.png`} alt="logo"/></a>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Prices</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
}

export default Header;