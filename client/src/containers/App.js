import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage';
import DashboardPage from '../components/DashboardPage'
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
            <Route exact path="/" component={HomePage}/>
            <Route path="/dashboard" component={DashboardPage}/>
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
