import React from 'react'
import './skillElement.css'
function SkillElement(props) {
  return (
      <div className="col-md-6 mb-6">
      <h5>{props.name}</h5>
      <div className="progress  ">
        <div
          className="progress-bar w-75"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  )
}

export default SkillElement