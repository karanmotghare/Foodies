import React from 'react';
import ProminentAppBar from './UI/Nav'
import './App.css'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import {Blogger} from './Bloggers/Blogger'
import {Restaurant} from './Restaurant/Restaurant'
import {Advertise} from './Advertise/Advertise'
import {Home} from './Home/Home'
import Sidebar from './UI/Side'

function App() {
  return (
   <React.Fragment>
     <Router>
       <ProminentAppBar />
       <Sidebar/>
       <Switch>
         <Route path="/Home" components={Home}/>
         <Route path="/Blogger" components={Blogger}/>
         <Route path="/Restaurant" components={Restaurant}/>
         <Route path="/Advertise" components={Advertise}/>
       </Switch>
     </Router>
   </React.Fragment>
  );
}

export default App;