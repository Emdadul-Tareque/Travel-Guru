import React, { createContext, useState } from 'react'
import './App.css';
import Book from './Components/Book/Book';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hotel from './Components/Hotel/Hotel';
import PrivateRoute from './Components/Private Route/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/book/:placeId">
            <Book></Book>
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <PrivateRoute path="/hotel/:placeId">
            <Hotel></Hotel>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
