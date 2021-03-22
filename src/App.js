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
import DestinationDetail from './Component/DestinationDetail/DestinationDetail';
export const UserContext= createContext();

function App() {
  const [loggedInUser, setLoggedInUser]= useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    {/* <h3>Email: {loggedInUser.email}</h3> */}
    
    <Router>
    <div className="header-wrap">
    <div className="container">
      <div className="row">
    <div className="col-md-3">
      <div className="header">
        <h4>Travel Agency</h4>
      </div>
      </div>

      <div className="col-md-9">
      <div className="menu">
    <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/home">Destination</Link></li>
          <li><Link to="/home">Blog</Link></li>
          <li><Link to="/home">Contact</Link></li>
          <li className="login-style"><Link to="/login">Login</Link></li>
          <li ><Link to="/login">{loggedInUser.email}</Link></li>
        </ul>
        </div>
        </div>
        </div>
    </div>
    </div>
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
        {/* <Route path="/destination">
        <Login></Login>
        </Route> */}
        <PrivateRoute path="/destination/:rideId">
        <DestinationDetail></DestinationDetail>
        </PrivateRoute>
        <Route path="*">
         <NotFound></NotFound>
        </Route>
      </Switch>
      
    </Router>
    </UserContext.Provider>
   
   
  );
  
}

export default App;
