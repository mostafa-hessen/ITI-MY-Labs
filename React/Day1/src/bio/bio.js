 
import React from 'react'
import Button from '../button/button'
import myImg  from './WhatsApp Image 2022-12-22 at 21.01.26.jpeg'
import './bio.css'
function Bio() {
  return (
    <div       className="container py-5 bio">
    <h2       className="head">About</h2>
    <div       className="row py-5
    align-items-center
    ">
        <div       className="col-sm-12 col-md-6">
            <div       className="img" >
                <img src={myImg}></img>
            </div>
        </div>
        <div       className="col-content col-sm-12 col-md-6   text-capitalize">
            <div       className="content">
                <h3>i'm fornt end developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium, saepe maxime rem, qui ad impedit minus magnam fugiat error sunt ipsa eius reiciendis? Molestias, culpa excepturi. Aliquam, quis laboriosam.</p>
                <Button name="download cv" type="warning"/>
            </div>
        </div>
    </div>
 </div>
  )
}

export default Bio
