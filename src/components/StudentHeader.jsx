import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
// import {Fabars} from "react-icons/fa"
// import {AiOutlineClose} from "react-icons/ai"


const StudentHeader = () => {
    return (
        <nav>
            
          <div className='container nav__container'>
          <Link to="/StudentHomepage" className='nav__logo'>
              <img src={Logo} alt='Navbar Logo'/>
            </Link>
            <ul className='nav__menu'>
              <li><Link className='menu' to="./studentevents">Event</Link></li>
              <li><Link className='menu' to="/studentarticles">Articles</Link></li>
              <li><Link className='menu' to="/">FaQs</Link></li>
              <li><Link className='menu' to="/">About</Link></li>
              {/* <li><Link to="/create">Create Post</Link></li>
              <li><Link to="/authors">Authors</Link></li> */}
            </ul>
            <ul className='nav__menu1'>
            <li><Link className='menu' to="/">John Doe</Link></li>
              <li><Link className='menu' to="/">Logout</Link></li>
            </ul>

    
            <button className="nav__toggle-btn">
              {/* <AiOutlineClose/> */}
            </button>
    
          </div>
        </nav>
      )
}

export default StudentHeader