import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Tooltip} from '@mui/material';

const SearchBox = () => {
  return (
    <div className='headerSerach d-flex justify-content-between ml-3'>
                    <input type="text"  placeholder='Search for products...'/>
                    <Tooltip title="Search" arrow>
                      <button>
                        <SearchIcon />
                      </button>
                    </Tooltip>
                </div>
  )
}

export default SearchBox
