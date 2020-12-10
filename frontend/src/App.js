import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header'
import LogInPage from './Components/LogInPage/LogInPage'
import MapPage from './Components/MapPage/MapPage';
import { BrowserRouter, Route } from 'react-router-dom';
import Test from './Components/Test1/Test1';



const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Navbar />
        <div className='app-content'>
          <Route exact path='/' render={() => <Test />}/>
          <Route exact path='/login' render={() => <LogInPage />}/>
          <Route exact path='/map' render={() => <MapPage />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
