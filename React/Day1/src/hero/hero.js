import React from 'react'
import Button from '../button/button'
import './hero.css'
function Hero() {
  return (
    <header>
    {/* <!-- Background image --> */}
    <div
            className="p-5 text-center bg-image"
     
    >
      <div       className="mask" style={{backgroundColor:"#11102599"}}>
        <div       className="d-flex justify-content-center align-items-end h-100">
        {/* <Button name="test" type="danger"/> */}
        </div>
      </div>
    </div>
    {/* <!-- Background image --> */}
  </header>
  )
}

export default Hero