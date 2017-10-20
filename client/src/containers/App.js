import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//components
import Navbar from '../components/Navbar'

//containers
import NewEcho from './NewEcho'
import ViewAllEchos from './ViewAllEchos'
import ViewEcho from './ViewEcho'



// get     /echos                -ViewAllEchos.js
// post    /echos                -NewEcho.js

// get     /echos/:id            -ViewEcho.js
// post    /echos/:id/comments   -ViewEcho.js
// put     /echos/comments/:id   -ViewEcho.js
// delete  /echos/comments/:id   -ViewEcho.js


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
      {Navbar()}
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/NewEcho" component={NewEcho}/>
      <Route path="/ViewAllEchos" component={ViewAllEchos}/>
      <Route path="/ViewEcho" component={ViewEcho}/>

    </div>
  </Router>

    );
}
}


const Home = () => (
  <div>
    <h2>Home</h2>
    
  </div>
)


export default App;
