import "./App.css";
import { useEffect, useState } from "react";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./component/navBar/Nav";
import Hero from "./component/hero/Hero";
import SearchNav from "./component/searchNav/SearchNav";
import GameCard from "./component/GameCard/GameCard";
import FilterComp from "./component/FilterComponent/FilterComp";
import FavoriteStore from "./component/FavouriteStore/FavoriteStore";
import GameDetails from "./component/GameDetailes/GameDetails";
import { useDispatch, useSelector } from "react-redux";
import { getUrlData } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const GamesData = useSelector((state) => state.Games); // array of Games => 15 array
  const sraechVal = useSelector((state) => state.value);  
  let [pageNumber, setpageNumber] = useState(1);
// let [searched,setSearched]=useState('o')
  useEffect(() => {
    dispatch(getUrlData(pageNumber,sraechVal));
  }, [pageNumber]);


  useEffect(() => {
    dispatch(getUrlData(pageNumber,sraechVal));
  }, [sraechVal]);

  return (
    <section className="app text-light">
      <Nav />

      { console.log(sraechVal)}
      <div className="row">
        <div className="col-lg-3 p-4   d-none  d-lg-block">
          <FilterComp  />
          <FavoriteStore />
        </div>

        <div className="col-12 col-lg-9">
          <Hero />
          <SearchNav  />

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
    </section>
  );
}
export default App;
