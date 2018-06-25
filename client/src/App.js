import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./containers/Home";
import Saved from "./containers/Saved";
import Footer from "./components/footer/Footer";


const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/saved" component={Saved}/>
        <Route render={() => (<h1 className="text-center">Page Not Found!</h1>)}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
)


export default App;
