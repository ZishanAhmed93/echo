import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Home from '../components/Home';
import Footer from '../components/Footer';
import NewEcho from './NewEcho'
import ViewAllEchos from './ViewAllEchos'
import ViewEcho from './ViewEcho'

class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  } 

  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/newecho" component={NewEcho}/>
            <Route path="/echos" component={ViewAllEchos}/>
            <Route path="/echo/:id" component={ViewEcho}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
