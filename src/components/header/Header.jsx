import React from 'react'
import './header.css'
import SearchBox from '../searchBox/SearchBox'
import logo from '../../assets/logo4.jpg'
import { Link } from 'react-router-dom'
import CountryDropdown from '../CountryDropdown/CountryDropdown'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Tooltip} from '@mui/material';
import Badge from '@mui/material/Badge'

const header = () => {
  return (
    <div>
      <div className="headerWrapper">

        <div className="top-strip">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
            Due to the <span>COVID 19</span> epidemic, orders may be processed with a slight delay
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                    <Link to={'/'}> <img src={logo} /> </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center">
                <CountryDropdown/>
                <SearchBox />
                <div className='d-flex align-items-center profileSection ml-auto'>
                  <Tooltip title="Profile" arrow>
                    <button className='circleProfile mr-3'>
                      <PersonOutlineOutlinedIcon />
                    </button>
                  </Tooltip>

                  <div className='d-flex align-items-center ml-auto'>
                    <span className="price mr-2">INR 23.00</span>
                    
                      <button className='circleCart'>
                      <Badge badgeContent={4} color='error'>
                        <ShoppingCartOutlinedIcon color='error'/>
                      </Badge>
                      </button>
                  </div>
                  
                </div>

              </div>
            </div>
          </div>

        </header>

        <nav className='container'>
          <div className="row">
            <div className="col-sm-3">
              <button className='category d-flex justify-content-between align-items-center'>
                  <span className='icon'><MenuIcon /></span>
                  All Categories
                  <span className='icon'><KeyboardArrowDownIcon /></span>
              </button>
            </div>
            <div className="col-sm-9">
              <ul className='d-flex justify-content-between'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default header;
