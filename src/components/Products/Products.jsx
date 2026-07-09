import './Products.css'
import Image2 from '../../assets/images/image-2.png'
import Image3 from '../../assets/images/image-3.jpg'
import Image4 from '../../assets/images/image-4.jpg'

function Products() {
  return (
    <section className="products">
        <div className="products-container">
            <div className="first-prod">
                <img src={Image2} alt="First orange products"/>
                <h3>R29.99 BEST SELLER</h3>
                <p className="prod-desc">2 fresh oranges</p>
            </div>
            <div className="second-prod">
                <img src={Image3} alt="Second orange products"/>
                <h3>R19.99 ENERGY RESTORER</h3>
                <p className="prod-desc">1 fresh orange</p>
            </div>
            <div className="third-prod">
                <img src={Image4} alt="Bowl of muesli"/>
                <h3>R59.99 FRESH MUESLIE</h3>
                <p className="prod-desc">Muesli served with fresh fruits</p>
            </div>
        </div>
    </section>
  )
}

export default Products
