import React from "react";
import "./GameDetails.css";
import GameName from "./GameName/GameName";
import GameScreenShots from "./gameScreenShots/gameScreenShots";
import GameStores from "./gameStores/gameStores";
import ImgCard from "./imgCard/ImgCard";
// import img from '../image 1 copy.jpg'

function GameDetails() {
  let imgUrl = "./image 1 copy.jpg";
  return (
    <>
      <div className="detailes">
        {/* ===== overlay ===== */}
        <div className="overlayGameDet">
          <div className="image"></div>
        </div>
      </div>
      <div className="container">
        {/* ===== game detailes =====  */}
        <div className="gameDetailes mt-5 w-80 m-auto   ">
          <div className="row ">
            <div className="col-12 col-md-6  col-lg-4">
                <ImgCard/>
            </div>

            <div className="col-12 col-md-6 col-lg-8">
              <div className="imgContent">
                {/* ===== game name and description */}
                <GameName/>
                {/* ===== game screen shotes ==== */}
                <GameScreenShots />
                {/* ===== avivable store */}
                <GameStores />
              </div>
            </div>
          </div>
        </div>

        {/* ===== similar games =====  */}
        <div></div>
      </div>{" "}
      {/*   {//container} */}
    </>
  );
}

export default GameDetails;
