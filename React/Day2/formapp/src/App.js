import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/login/login";
import Register from "./component/Register/Register";
function App() {
  return <div className="App">
 
     <Login className="mt-2 mb-5"/>

     <Register/>



  </div>;
}

export default App;
