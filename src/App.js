
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import BullyingWebsites from "./components/BullyingWebsites";
import PSAs from "./components/PSAs";
import News from "./components/News";
import Forms from "./components/Forms";
import Merchandise from "./components/Merchandise";
import Contact from "./components/Contact";

function App() {
  return (
    <div >
      <Router>
        <div className=""> 
        <Header></Header>
        <Navbar></Navbar>
      
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/bullyingwebsites' component={BullyingWebsites} />
          <Route path='/psa' component={PSAs} />
          <Route path='/news' component={News} />
          <Route path='/forms' component={Forms} />
          <Route exact path="/merchandise" component={Merchandise} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
