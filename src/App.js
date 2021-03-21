import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './NotFound/NotFound';
import userEvent from '@testing-library/user-event';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import ShipmentDetail from './Component/Shipment/Shipment';
import Shipment from './Component/Shipment/Shipment';
export const UserContext= createContext();

function App() {
  const [loggedInUser, setLoggedInUser]= useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <h3>Email: {loggedInUser.name}</h3>
    <div className="header-wrap">
    <div className="container">
      <div className="row">

        <div className="col-md-3">
      <div className="header">
        <h4>Urban Rider</h4>
      </div>
      </div>
      <div className="col-md-9">
      <div className="menu">
        <Router>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/destination">Destination</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
          <li className="login"><a href="/login">Login</a></li>
        </ul>
        </Router>
      </div>
    </div>

    </div>
    </div>
    </div>
    <Router>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/shipment:rideId">
        <Shipment></Shipment>
        </Route>
        <Route path="*">
         <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
   
   
  );
  
}

export default App;
