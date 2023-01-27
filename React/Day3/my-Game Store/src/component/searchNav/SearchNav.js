import React from 'react'
import './SearchNav.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {FaHeart} from 'react-icons'
function SearchNav() {
  return (
    <div className=" 
    NavSearch
    mt-4
    p-2
    ">

    <div className='row justify-content-center'>
      <div className="col-6">

        <h3 className='text-capitalize'>all</h3>
      </div>
        <div className='search_filter col-6'>
            <div className='search'>
                    <input type="text" placeholder='search'/>
            </div>
            <div className='icon'>
              {/* <i class="fa-regular fa-heart"></i> */}
              <i class="fa-solid fa-magnifying-glass"></i>
              </div>
        </div>
        
    </div>
    </div>
  )
}

export default SearchNav