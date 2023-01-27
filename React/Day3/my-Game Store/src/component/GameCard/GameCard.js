import React from "react";
import "./GameCard.css";
// import img from "./image 1 copy.jpg";
function GameCard(props) {
console.log(props.img);

  return (
    <div className="col-12 col-sm-6 col-lg-4 mt-3">
      {/* ==== Game ==== */}
      <div className="Game__container   ">
        {/* ==== Game Img ==== */}
        <div className="img design3">
          <img src={props.img} alt="portfolio" loding="lazy" />
        </div>

        {/* ==== Game head ==== */}

        <div className="Game-head mt-3">
          <div className="StoreIcon"> </div>
          <h3 className="GameName text-capitalize">playstaion</h3>
        </div>
        <hr/>

        {/* ==== Game body Description ==== */}
        {/* <div className="Game-description">
          <p>loding</p>
        </div> */}

        {/* ==== Game Fotter => Icons ==== */}
        <div className="Game-footer d-flex align-items-center">
          <button type="button" class="btn btn-primary rounded-5  text-capitalize">
            new
          </button>
          <div className="startIcon icons">
            <i className="fa-solid fa-star "></i>
            <span className="count">10</span>
          </div>
          <div className="favourit icons">
            {/* <i className="fa-solid fa-heart"></i> */}
            <i className="fa-regular fa-heart"></i>
            <span className="count">12</span>
          </div>
          <div className=" icons">
          <i className="fa-solid fa-arrow-right"></i>
            <span className="count">16</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
