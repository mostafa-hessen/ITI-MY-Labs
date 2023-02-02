import React from 'react'
import { useEffect, useState } from "react";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../hero/Hero";
import SearchNav from "../searchNav/SearchNav";
import GameCard from "../GameCard/GameCard";
// import FilterComp from "../FilterComponent/FilterComp";
import FavoriteStore from "../FavouriteStore/FavoriteStore";
import { useDispatch, useSelector } from "react-redux";
import { getUrlData } from "../../redux/actions/index";
import FilterComp from '../FilterComponent/FilterComp';
function Home() {
    const dispatch = useDispatch();
    const GamesData = useSelector((state) => state.allGame.Games); // array of Games => 15 array
    const sraechVal = useSelector((state) => state.allGame.searchValue);  
    const filterVal = useSelector((state) => state.allGame.filterValue);  
    let [pageNumber, setpageNumber] = useState(1);
    useEffect(() => {
      dispatch(getUrlData(pageNumber,sraechVal,filterVal));
    }, [pageNumber]);
  
  
    useEffect(() => {
      dispatch(getUrlData(pageNumber,sraechVal,filterVal));
    }, [sraechVal]);
  
    useEffect(() => {
      dispatch(getUrlData(pageNumber,sraechVal,filterVal));
    }, [filterVal]);
  return (
    <div className="row">
    <div className="col-lg-3 p-4   d-none  d-lg-block">
      <FilterComp  />
      <FavoriteStore />
    </div>

    <div className="col-12 col-lg-9">
      <Hero/>
      <SearchNav  />
{console.log(GamesData)}
      <div className="row p-3">
        {GamesData.map((ele) => {
          return <GameCard key={ele.id} element={ele} />;
        })}

     
        <button className="mt-3 w-30 btn bg-danger" onClick={()=>
        setpageNumber(pageNumber>1?--pageNumber:1 )
        }>previouse</button> 

      <button
          className="mt-3 btn bg-primary"
          onClick={() => setpageNumber(++pageNumber)}//1 2 3 4 5
        >
          next
        </button>

      </div>
    </div>
  </div>  
  )

}

export default Home