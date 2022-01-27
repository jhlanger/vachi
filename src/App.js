
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
import Header2 from './components/Header2';
import Chapter from './pages/Chapter';
import HateMotivatedBehaviorPolicy from './pages/HateMotivatedBehaviorPolicy';
import Letters from './pages/Letters';
import MembershipForm from './pages/MembershipForm';
import NonDiscriminationPolicy from './pages/NonDiscriminationPolicy';
import SexualHarrasmentPolicy from './pages/SexualHarrasmentPolicy';
import Sign from './pages/Sign';
import Footer from './components/Footer';


function App() {
  return (
    <div >
      <Router>
        <div className=""> 
        <Header></Header>
        <Navbar></Navbar>
        <Header2></Header2>
      
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/bullyingwebsites' component={BullyingWebsites} />
          <Route path='/psa' component={PSAs} />
          <Route path='/news' component={News} />
          <Route path='/forms' component={Forms} />
          <Route exact path="/merchandise" component={Merchandise} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/chapter" component={Chapter} /> 
          <Route exact path="/hatemotivatedbehaviorpolicy" component={HateMotivatedBehaviorPolicy} />
          <Route exact path="/letters" component={Letters} />
          <Route exact path="/membershipform" component={MembershipForm} />
          <Route exact path="/nondiscriminationpolicy" component={NonDiscriminationPolicy} />
          <Route exact path="/sexualharrasmentpolicy" component={SexualHarrasmentPolicy} />
          <Route exact path="/sign" component={Sign} />
        </Switch>
        </div>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
