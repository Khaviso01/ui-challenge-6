import './Subfooter.css'
import Image5  from '../../assets/images/image-5.jpg'

function Subfooter() {
  return (
    <section className="subfooter">
            <div className="subfooter-container">
                <div className="item-1">
                  <p>Just imagine seeds and summer in gell sunshine</p>
                </div>
                <div className="item-2-image">
                   <img src={Image5} alt="fruits image"/>
                </div>
                <div className="item-3-card">
                    <h3>EBEE WOUS</h3>
                    <h2>BENEFIT</h2>
                    <p>If you wanna know us more</p>

                    <button className="subfooter-btn">READ MORE</button>

                </div>
            </div>
        </section>
  )
}

export default Subfooter

