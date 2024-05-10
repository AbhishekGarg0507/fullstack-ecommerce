import React from 'react'
import './navbar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { IoShirtOutline } from "react-icons/io5";
import { PiTelevisionSimple , PiCookie} from "react-icons/pi";


const Navbar = () => {
  return (
    <nav className='container'>
          <div className="row align-items-center">
            <div className="col-sm-3">
              <button className='categoryBtn d-flex align-items-center mb-3' >
                <span><MenuIcon /></span>
                <span className='mx-2'>all category</span>
                <span><KeyboardArrowDownIcon /></span>
              </button>
            </div>
            <div className="col-sm-9 ">
              <ul className='d-flex justify-content-between nav_list '>
                <li className='nav_listItem'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='nav_listItem'>
                    <Link to='/'>Shop</Link>
                </li>
                <li className='nav_listItem'>
                    <Link to='/' className=''>
                        <IoShirtOutline className='mb-1'/>
                        Fashion
                    </Link>
                </li>
                <li className='nav_listItem'>
                    <Link to='/'>
                        <PiCookie className='mb-1' />
                        Grocery
                    </Link>
                </li>
                <li className='nav_listItem'>
                    <Link to='/'>
                        <PiTelevisionSimple className='mb-1' />
                        Electronics</Link>
                </li>
                <li className='nav_listItem'>
                    <Link to='/'>Blog</Link>
                </li>
                <li className='nav_listItem'>
                    <Link to='/'>Contact</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
  )
}

export default Navbar
