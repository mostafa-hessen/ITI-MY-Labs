import React from "react";
import "./FilterComp.css";
function FilterComp() {
  return (
    <div className="Filter__container text-capitalize ">
      <h6 className="mb-4">filter</h6>

      <ul className="unstyle-list m-0 p-0">


       


      <li className="list-group-item d-flex justify-content-between align-items-center mb-3">
            <div>

                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label ms-2" for="flexRadioDefault1">
                    Default radio
                </label>
            </div>
          <span className="badge bg-primary rounded-pill">1400</span>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-center mb-3">
            <div>

                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label ms-2" for="flexRadioDefault1">
                    Default radio
                </label>
            </div>
          <span className="badge bg-primary rounded-pill">1400</span>
        </li>

      </ul>
    </div>
  );
}

export default FilterComp;
