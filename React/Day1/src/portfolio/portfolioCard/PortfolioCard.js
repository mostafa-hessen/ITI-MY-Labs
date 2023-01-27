import React from 'react'
import './PortfolioCard.css'
function PortfolioCard(props) {
  return (
    // <!-- ==== card ==== -->
    <div className="col-xs-12 col-sm-6   mt-3">
      <div className="card" style={{overflow: "hidden"}}>
        <div className="img"
       style={{ backgroundImage:`url(${props.image})`}}
        >
         
        </div>
        <div className="card-body">
          <p className="card-text" style={{color: "rgb(160, 160, 160)"}}>
              Some quick example text to build on the card title and make up the
              bulk.
          </p>
        </div>

      </div>
    </div>
  )
}

export default PortfolioCard