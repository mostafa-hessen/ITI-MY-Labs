import React from 'react'
import './FavoriteStore.css'
import img from './logo192.png'
function FavoriteStore() {
  return (
    <div className="Favourite__container text-capitalize mt-5 ">
   <i class="fa-solid fa-star" style={{color:"orange"}}></i>
    <h6 className="mb-4 d-inline p-2 ">Favorite Store</h6>

    <ul className="unstyle-list m-0  mt-3 p-0">

      <li className="list-group-item d-flex justify-content-between align-items-center mb-3">
              {/* <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> */}
          <div className='d-flex align-items-center'>
          <img src={img}alt=""  width={30}/>
               <h6 className='p-2 py-3'>play</h6>
          </div>
        <span className="badge  rounded-pill">10</span>
      </li>


      <li className="list-group-item d-flex justify-content-between align-items-center mb-3">
          <div className='d-flex align-items-center'>
          <img src={img}alt=""  width={30}/>
               <h6 className='p-2 '>play</h6>
          </div>
        <span className="badge  rounded-pill">10</span>
      </li>

      

    </ul>
  </div>
  )
}

export default FavoriteStore