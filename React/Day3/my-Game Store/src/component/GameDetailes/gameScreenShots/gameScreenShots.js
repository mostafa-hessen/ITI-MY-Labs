import React from 'react'
import img from '../image 1 copy.jpg'
function GameScreenShots() {
  return (
    <div>
    <h3 className='text-capitalize'>screen shotes  </h3>
    <ul className='list-unstyled d-flex'>
        <li className='rounded-circle ms-2'><img className='rounded-3' width={40} src={img} alt=""  /></li>
        <li className='rounded-circle ms-2'><img className='rounded-3' width={40} src={img} alt=""  /></li>
    </ul>
</div>
  )
}

export default GameScreenShots