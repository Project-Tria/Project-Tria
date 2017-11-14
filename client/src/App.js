import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Login from "./pages/Login/Login";
import ManagerMain from "./pages/Manager/ManagerMain";
import Create from "./pages/Manager/Create";
import Search from "./pages/Manager/Search";
import CrewMain from "./pages/Crew/CrewMain";
// import NoMatch from "./pages/NoMatch/NoMatch";
import './App.css';

const App = () => (
  <div>
  <Jumbotron>
    <img src="http://www.whymonster.com/images/Logo.png" alt="Company Logo" />
    <br />
    <br />
    <p><span style={{ fontSize:12 }}><i>powered by </i></span>Crewify</p>
  </Jumbotron>
  <Router>
  <div>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/manager/" component={ManagerMain} />
    <Route exact path="/manager/create/" component={Create} />
    <Route exact path="/manager/search/" component={Search} />
    <Route exact path="/crew/" component={CrewMain} />
    </Switch>
  </div>
</Router>
</div>
)

export default App;
