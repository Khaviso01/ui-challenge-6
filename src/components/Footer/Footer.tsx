import './Footer.css'
import Image6 from '../../assets/images/image-6.jpg'
import FooterImg1 from '../../assets/images/footer-image-1.png'
import FooterImg2 from '../../assets/images/footer-image-2.png'
import FooterImg3 from '../../assets/images/footer-image-3.png'

function Footer() {
  return (
    <section id="contact" className="footer">
      <div className="footer-container">
        <div>

          <img src={Image6} alt="bowl of red fruit" className="footer-image-last" />

        </div>

        <div className="menu-benefit-container">

          <h2>OUR MENU BENEFIT</h2>

          <div className="benefit-items">

            <div className="benefit-card">

              <img src={FooterImg1} alt="fresh bowl logo 1" className="footer-image" />

              <h4>FRESH</h4>

              <p className="pro-desc">Fresh oranges special</p>

            </div>


            <div className="benefit-card">

              <img src={FooterImg2} alt="fresh bowl logo 2" />

              <h4>VITAMIN</h4>

              <p className="pro-desc">Freshly packed cereal</p>

            </div>

            <div className="benefit-card">

              <img src={FooterImg3} alt="footer cup logo" />

              <h4>ORE ANIC</h4>

              <p className="pro-desc">Perfect orange drink</p>

            </div>
          </div>

        </div>

        <div className="opening-hrs-container">

          <h2>OPENING HOURS</h2>

          <div className="hours-items">

            <table>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>17:00</td>
                </tr>

                <tr>
                  <td>Tuesday</td>
                  <td>13:60</td>
                </tr>

                <tr>
                  <td>Wednesday</td>
                  <td>19:00</td>
                </tr>

                <tr>
                  <td>Thursday</td>
                  <td>13:00</td>
                </tr>
              </tbody>

            </table>

            <hr />

            <h2>QUICK LINKS</h2>

            <div className="footer-nav">

              <ul className="footer-links">
                <li><a href="#home">HOME</a></li>
                <li><a href="#menu">MENU</a></li>
                <li><a href="#pages">PAGES</a></li>
                <li><a href="#blog">BLOG</a></li>
                <li><a href="#contact">CONTACT</a></li>
              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Footer
