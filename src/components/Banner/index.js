import styles from "./Banner.module.css";

function Banner( { banner, logo } ) {
    return (
        <section>
            <div 
            id={styles.Banner} 
            style={{backgroundImage: `url(/images/${banner}.png)`}}>
            </div>

            <div style={{backgroundColor: '#FFEDDD'}} className={styles.container}>
                <img src={`/images/${logo}.png`} alt="logo" style={{ height: '250px', width: '500px' }}/>
                <div className={styles.container} style={{ flexDirection: "column" }}>
                    <h2 id={styles.title}>Bem-vindo ao Cats&Dogs!</h2>
                    <p  id={styles.text}>Cuidamos do seu pet com produtos de qualidade, serviços especializados e muito carinho. Explore nosso site e descubra tudo o que oferecemos para o bem-estar do seu amigo peludo.</p>
                </div>

            </div>
        </section>
    );
}

export default Banner;