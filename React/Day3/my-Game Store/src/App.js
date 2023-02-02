import "./App.css";

import Nav from "./component/navBar/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import GameDetails from "./component/GameDetailes/GameDetails";
import Home from "./component/Home/Home";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <section className="app text-light">
      <Nav />
      <BrowserRouter>

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detailes">
            <GameDetails />
          </Route>
           
        </Switch>
      </BrowserRouter>

    </section>
  );
}
export default App;
