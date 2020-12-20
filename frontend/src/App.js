import React from 'react';
import LogInPage from './Components/LogInPage/LogInPage';
import MapPage from './Components/MapPage/MapPage';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';


const App = () => {
   return (
      <Router>      
         <Header/>
         <Route path = '/' exact component = {MapPage}/>
         <Route path = '/login' component = {LogInPage}/>
      </Router>
   )
}


export default App;
