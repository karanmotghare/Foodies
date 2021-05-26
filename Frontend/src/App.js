import React from 'react';
//import ProminentAppBar from './UI/Nav'
//import './App.css'
import Home from './Home/Home';
import Restaurant from './Restaurant/Restaurant';
import Blogger from './Bloggers/Blogger';
import Advertise from './Advertise/Advertise';
import Sidebar from './UI/Sidebar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
   <>
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
   </>
  );
}

export default App;