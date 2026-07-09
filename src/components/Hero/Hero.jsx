import './Hero.css'


function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">

                <span className="hero-top">
                    <p className="hero-pr">Premium Restaurant</p>
                    <button className="signin-btn">
                        SIGN IN
                    </button>
                </span>

                <h1 className="hero-title">
                    Anida <br />Dedelay
                </h1>

                <p className="hero-text">
                    BEST HEALTHY SALAD SERVED IN OUR RESTAURANT
                </p>

                <button className="hero-btn">LEARN MORE</button>

            </div>
        </section>
    )
}

export default Hero
