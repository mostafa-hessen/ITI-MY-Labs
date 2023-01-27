import React from 'react'
import './Nav.css'
function Nav() {
  return (
    <div className="row">
    {/* <!-- =====header======== --> */}
    <div className="col-12 p-3 text-capitalize border-bottom  ">
      <header className="d-flex  align-items-center justify-content-around">

        <div className=" col-6    BeboSocialContainer justify-content-center text-center">
          <h3 className="log text-light">BeboSocial</h3>
        </div>



        <div className="col-6   imgBtnContainer">

          <div className="imgBtn d-flex  align-items-center justify-content-center">
            {/* <button className="btn btn-primary rounded-5 py-1 m-2 font-weight-bold text-capitalize">
              creat
            </button> */}
            <div className="img rounded-circle"></div>
          </div>
        </div>

      </header>
    </div>
    </div>
  )
}

export default Nav