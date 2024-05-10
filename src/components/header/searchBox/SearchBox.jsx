import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Tooltip} from '@mui/material';
import { useState } from 'react';

const SearchBox = ({placeholder}) => {

  return (
    <div className='headerSerach d-flex justify-content-between mx-3'>
        <input type="text"  placeholder={placeholder}/>
        <Tooltip title="Search" arrow>
            <button>
              <SearchIcon />
          </button>
        </Tooltip>
    </div>
  )
}

export default SearchBox
