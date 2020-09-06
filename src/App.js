import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  


  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/home">
        <Home/>
        </Route>        
        <Route path="/details/:id">
          <Details/>
        </Route>
        <Route exact path="/">          
          <Home/>
        </Route>        
      
      <Route path="*">
        <NotFound/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
