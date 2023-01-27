import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./component/navBar/Nav";
import Hero from "./component/hero/Hero";
import SearchNav from "./component/searchNav/SearchNav";
import GameCard from "./component/GameCard/GameCard";
import FilterComp from "./component/FilterComponent/FilterComp";
import FavoriteStore from "./component/FavouriteStore/FavoriteStore";
import GameDetails from "./component/GameDetailes/GameDetails";

function App() {
  const [Game, setGame] = useState([]);
  useEffect(() => {
    // axios
    //   .get(
    //     `https://api.rawg.io/api/games?key=4efadf7d35904a19996995e218e37c5a&dates=2019-09-01,2019-09-30&platforms=18&page_size=15&page=5`
    //   )

    //   .then((data) => {
    //     setGame(data.data.results);
    //   })
    //   .catch((err) => console.log(err));
  // }, []);
  // var ListOFGame = [];
  // Game.forEach((user, index) => {
  //   ListOFGame.push(<GameCard img={user.background_image} key={index} />);
  // });
  return (
    <section className="app text-light">
      <Nav />
       <GameDetails/>
      {/* <div className="row">
        <div className="col-lg-3 p-4   d-none  d-lg-block">
            <FilterComp />
            <FavoriteStore/>
        </div>

        <div className="col-12 col-lg-9">
          <Hero />
          <SearchNav />
          <div className="row p-3">{ListOFGame}</div>
        </div>
    
      </div> */}




    </section>
  );
}

export default App;

{
  /* <BasicExample game={Game}/> */
}
