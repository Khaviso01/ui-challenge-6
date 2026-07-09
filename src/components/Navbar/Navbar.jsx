import './Navbar.css'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-logo">
          <img src={logo} alt="restaurant logo" />
          <p>HEALTHY FOOD<br/>
            HEALTHY LIFE
          </p>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">HOME</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><a href="#pages">PAGES</a></li>
          <li><a href="#blog">BLOG</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>

        <div className="navbar-actions">
          <button><FaUser size={25} /></button>
          <button><FaShoppingCart size={25} /></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar