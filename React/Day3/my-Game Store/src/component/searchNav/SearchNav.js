import React, { useEffect,useState } from 'react'
import { SearchedValue } from '../../redux/actions'
import './SearchNav.css'
import { useDispatch, useSelector } from "react-redux";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {FaHeart} from 'react-icons'
function SearchNav() {
  const dispatch = useDispatch();
  // const sraechVal = useSelector((state) => state);  

  let [value,setvalue ]=useState('')
  useEffect(() => {
   dispatch(SearchedValue(value))
     
  }, [value])
  
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
                    <input type="text"  onChange= {(e)=> setvalue(e.target.value)} placeholder='search'/>
            </div>
            <div className='icon'>
              <i className="fa-solid  fa-magnifying-glass"></i>
              </div>
        </div>
        
    </div>
    </div>
  )
}

export default SearchNav