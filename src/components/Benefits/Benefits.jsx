import './Benefits.css'
import Orange from '../../assets/images/orange-image.png'
import Image1 from '../../assets/images/image-1.png'

function Benefits() {
    return (
        <section className="benefits">
            <div className="benefits-container">

                <div className="benefits-left">

                    <h1 className="benefits-title">
                        Orange Benefit
                    </h1>

                    <div className="benefits-content">

                        <img src={Orange} alt="Orange image" className="benefits-orange-img" />

                        <div className="benefits-info">

                            <p>Just re-imagine summer exclusives in gold and premium breakfast meals</p>

                            <button className="benefits-btn">LEARN MORE</button>

                        </div>

                    </div>

                </div>

                <div className="benefits-right">
                    <img src={Image1} alt="Image 1 orange" className="benefits-image" />
                </div>

            </div>

        </section>
    )
}

export default Benefits
