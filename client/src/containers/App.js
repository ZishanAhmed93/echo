import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Home from '../components/Home';
import Footer from '../components/Footer';
import NewEcho from './NewEcho'
import ViewAllEchos from './ViewAllEchos'
import ViewEcho from './ViewEcho'
//<<<<<<< HEAD
import Registration from './Registration'
import LogIn from './LogIn'
import Profile from './Profile'
//import ViewComments from './ViewComments'



// get     /echos                -ViewAllEchos.js
// post    /echos                -NewEcho.js

// get     /echos/:id            -ViewEcho.js
// post    /echos/:id/comments   -ViewEcho.js
// put     /echos/comments/:id   -ViewEcho.js
// delete  /echos/comments/:id   -ViewEcho.js

//=======
//>>>>>>> 795e1f70693c119d87121700560660317795127b

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

            <Route path="/login" component={LogIn}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/profile" component={Profile} />
=======
>>>>>>> 795e1f70693c119d87121700560660317795127b
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
