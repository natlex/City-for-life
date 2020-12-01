import React from 'react';
import Login from '../login';
import Map from '../map';
import Header from '../header'
import {BrowserRouter as Router, Route} from 'react-router-dom'


const App = () => {
   return (
      <Router>      
         <Header/>
         <Route path = '/' exact component = {Map}/>
         <Route path = '/login' component = {Login}/>
      </Router>
   )
}


export default App;
