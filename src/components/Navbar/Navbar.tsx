import './Navbar.css'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Location04Icon } from '@hugeicons/core-free-icons'
import { ShoppingCart02Icon } from '@hugeicons/core-free-icons'
import logo from '../../assets/images/logo.png'

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-logo">
          <img src={logo} alt="restaurant logo" />
          <p>HEALTHY FOOD<br />
            HEALTHY LIFE
          </p>
        </div>
        <div className='nav-right'>
          <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
            <li><a href="#home">HOME</a></li>
            <li><a href="#menu">MENU</a></li>
            <li><a href="#pages">PAGES</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#contact">CONTACT US</a></li>
            <li className="LocationCart">
              <button><HugeiconsIcon icon={Location04Icon} size={25} /></button>
              <button><HugeiconsIcon icon={ShoppingCart02Icon} size={25} /></button>
            </li>
          </ul>


        </div>
        <div className="hamburger-menu">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={24}
            color="#fff"
            rounded
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar