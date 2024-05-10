import React, { useState } from 'react'
import './countrydropdown.css'
import {Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import SearchBox from '../searchBox/SearchBox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import { IoClose } from "react-icons/io5";


const CountryDropdown = () => {

  const[isOpenModel , setIsOpenModel] = useState(false)
  
  return (
    <>
    <Button variant="outlined" className='countryDropdown' color='primary' onClick={() => setIsOpenModel(true)}>
        <div className='info d-flex flex-column align-items-start'>
            <span className='label '>Your Location</span>
            <span className='name'>India</span>
        </div>
        <span className='icon' >
            <KeyboardArrowDownIcon />      
        </span>     
    </Button>

    <Dialog open={isOpenModel} onClose={() => setIsOpenModel(false)}>
      
      <h5 className=''>Choose your Delivery Location</h5>
      <p className=''>Enter your address and we will specify the offer for your area.</p>
      <button className='closeBtn'  onClick={() => setIsOpenModel(false)}> <IoClose/> </button>
      <SearchBox placeholder={'Search your area'} />
      

      
      <List className='countryList'>
        <ListItem>
          <Link className='d-flex justify-content-between'>
                <span>Select your location</span>
                <span className='chip'><Chip label="Clear all" variant="outlined" size='small'/></span>    
          </Link>
        </ListItem>
        <ListItem>
          <Link className='d-flex justify-content-between'>
                <span>Haryana</span>
                <span className='chip'><Chip label="Min: 130" variant="outlined" size='small'/></span>    
          </Link>
        </ListItem>
        <ListItem>
          <Link className='d-flex justify-content-between'>
                <span>Chandigarh</span>
                <span className='chip'><Chip label="Clear all" variant="outlined" size='small'/></span>    
          </Link>
        </ListItem>
        <ListItem>
          <Link className='d-flex justify-content-between'>
                <span>Chandigarh</span>
                <span className='chip'><Chip label="Clear all" variant="outlined" size='small'/></span>    
          </Link>
        </ListItem>
        <ListItem>
          <Link className='d-flex justify-content-between'>
                <span>Chandigarh</span>
                <span className='chip'><Chip label="Clear all" variant="outlined" size='small'/></span>    
          </Link>
        </ListItem>
        <ListItem>
          <Link className='d-flex justify-content-between'>
                <span>Chandigarh</span>
                <span className='chip'><Chip label="Clear all" variant="outlined" size='small'/></span>    
          </Link>
        </ListItem>
        <ListItem>
          <Link className='d-flex justify-content-between'>
                <span>Chandigarh</span>
                <span className='chip'><Chip label="Clear all" variant="outlined" size='small'/></span>    
          </Link>
        </ListItem>
        <ListItem>
          <Link className='d-flex justify-content-between'>
                <span>Chandigarh</span>
                <span className='chip'><Chip label="Clear all" variant="outlined" size='small'/></span>    
          </Link>
        </ListItem>
        <ListItem>
          <Link className='d-flex justify-content-between'>
                <span>Chandigarh</span>
                <span className='chip'><Chip label="Clear all" variant="outlined" size='small'/></span>    
          </Link>
        </ListItem>
        <ListItem>
          <Link className='d-flex justify-content-between'>
                <span>Chandigarh</span>
                <span className='chip'><Chip label="Clear all" variant="outlined" size='small'/></span>    
          </Link>
        </ListItem>
      </List>
      

    </Dialog>
    </>
  )
}

export default CountryDropdown
