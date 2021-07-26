import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Header/Navigation';
import Categories from './Components/Pages/Categories';
import Comparison from './Components/Pages/Comparison';
import Contacts from './Components/Pages/Contacts';
import Delivery from './Components/Pages/Delivery';
import Home from './Components/Pages/Home';
import LookBooks from './Components/Pages/LookBooks';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/categories'>
          <Categories />
        </Route>

        <Route exact path='/comparison'>
          <Comparison />
        </Route>

        <Route exact path='/contacts'>
          <Contacts />
        </Route>

        <Route exact path='/delivery'>
          <Delivery />
        </Route>

        <Route exact path='/lookbooks'>
          <LookBooks />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
