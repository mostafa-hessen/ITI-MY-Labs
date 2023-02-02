import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GameDetaileFunc } from "../../redux/actions";
import "./GameCard.css";
// import img from "./image 1 copy.jpg";
function GameCard(props) {
// console.log(props.element);
const filterVal = useSelector((state) => state.allGame.filterValue); 
const dispatch= useDispatch() 
useEffect(() => {
}, [])
const ClickedDetailes=(e)=>{

  dispatch(GameDetaileFunc(e)) 
  console.log(e);
}

  return (
    <div className="col-12 col-sm-6 col-lg-4 mt-3"  onClick={()=>ClickedDetailes(props.element)}>
      {/* ==== Game ==== */}
      <div className="Game__container   ">
        {/* ==== Game Img ==== */}
        <div className="img design3">
          <img src={props.element.background_image} alt="portfolio" loding="lazy" />
        </div>

        {/* ==== Game head ==== */}

        <div className="Game-head mt-3">
          <div className="StoreIcon"> </div>
          <h3 className="GameName text-capitalize">{props.element.name}</h3>
        </div>
        <hr/>

        {/* ==== Game body Description ==== */}
        {/* <div className="Game-description">
          <p>loding</p>
        </div> */}

        {/* ==== Game Fotter => Icons ==== */}
        <div className="Game-footer d-flex align-items-center">
          <button type="button" class={`btn btn-${filterVal==1?'danger':filterVal==4?'orange':filterVal==5?'gold':'primary'} rounded-5  text-capitalize`}>
{filterVal==1?'Trending':filterVal==4?'Popular':filterVal==5?'Top Rated':'all'
}
          
          </button>
          <div className="startIcon icons">
            <i className="fa-solid fa-star text-gold "></i>
            <span className="county">{
            // console.log(  props.element.ratings.lenght>1?123:2)
            // props.element.ratings.lenght? props.element.ratings['count']:2
            122
              //  props.element.ratings!=undefined?props.element.ratings[0]['count']:123
          //  props.element.ratings[0]['count']?  props.element.ratings[0]['count']:12
            }</span>

            {/* {console.log(props.element.ratings[0]['count'])} */}
          </div>
          <div className="favourit icons" onClick={()=>console.log(props.element)}>
            {/* <i className="fa-solid fa-heart"></i> */}
            <i className="fa-regular text-danger fa-heart"></i>
            12
            {/* <span className="count">12</span> */}
          </div>
          <div className=" icons">
          {/* <i class="fa-thin fa-comment-dots"></i> */}
          <i className="fa-solid fa-paper-plane text-darktheme"></i>
          32
            {/* <span className="count">{props.element.ratings[0]['id']}</span> */}
          </div>

          <div className=" icons iconLink">

      <Link to={'/detailes'} className="myLink">More</Link>

      

        </div>
        </div>

      </div>

    </div>
    // </Link>
      // <button className="btn bg-primary">Next</button>
  );
}

export default GameCard;
