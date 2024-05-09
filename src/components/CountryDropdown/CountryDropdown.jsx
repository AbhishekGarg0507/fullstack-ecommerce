import React from 'react'
import './countrydropdown.css'
import {Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CountryDropdown = () => {
  return (
    <Button variant="outlined" className='countryDropdown' color='primary'>
        <div className='info d-flex flex-column align-items-start'>
            <span className='label '>Your Location</span>
            <span className='name'>India</span>
        </div>
        <span className='icon' >
            <KeyboardArrowDownIcon />      
        </span>     
    </Button>
  )
}

export default CountryDropdown
