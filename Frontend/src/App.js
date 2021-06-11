import React from 'react';
//import ProminentAppBar from './UI/Nav'
//import './App.css'
import Home from './Home/Home';
import Restaurant from './Restaurant/Restaurant';
import Blogger from './Bloggers/Blogger';
import Advertise from './Advertise/Advertise';
import Sidebar from './UI/Sidebar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import User from './UI/User';
import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';

function App() {
  const { openSidebar } = useGlobalContext();
  return (
    <main className="main">
      <User />
      <button onClick={openSidebar} className='sidebar-toggle'>
          <FaBars />Foodies
      </button>
      <Router>
        <Switch>
          <Route exact path ='/'>
            <Home/>
          </Route>
          <Route path='/blogger'>
            <Blogger />
          </Route>
          <Route path='/restaurant'>
            <Restaurant />
          </Route>
          <Route path='/advertise'>
            <Advertise />
          </Route>
        </Switch>
        <Sidebar />
      </Router>
      
   </main>
  );
}

export default App;