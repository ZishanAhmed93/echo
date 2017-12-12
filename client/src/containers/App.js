import './App.css';

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from '../components/Footer';

import LandingPage from './LandingPage';
import DashboardPage from './DashboardPage';

//login should load into navbar
import LogIn from './LogIn'

//should load into dashboard
import Echos from './Echos';

import NewEcho from './NewEcho';
import ViewEcho from './ViewEcho';


//no longer needed
//import HomePage from './HomePage';
//import Registration from './Registration'
//things not implemented yet
import ProfilePage from './ProfilePage';
//import TopEchosPage from './TopEchosPage';



function PrivateRoute({component: Component, isAuthed, ...rest}) {
  return(
    <Route 
      {...rest}
      render={(props) => isAuthed === true 
        ? <Component {...props} /> 
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  );
}

class App extends Component {
  constructor(){
    super();
    this.state = { isAuthed: false };
    this.handleAuth = this.handleAuth.bind(this);
  } 

  componentWillMount() {
    // You need credentials: "same-origin" for express session to work.
    fetch("/auth", {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "same-origin",
    })
    .then(res => {
      if(res.status === 200) {
       this.setState({ isAuthed: true });
      } else {
        this.setState({ isAuthed: false });
      }
    });
  }

  handleAuth(isAuthed) {
    this.setState({isAuthed: isAuthed});
  }

  render(){
    let isAuthed = this.state.isAuthed;
    return(
      <Router>
        <div id="ContentWrap">
        
          
          <Navbar isAuthed={this.state.isAuthed}  onAuthChange={this.handleAuth}/>
        
          <div id="Content">
            <Switch>
              {isAuthed ? <Route exact path="/" component={DashboardPage} />
                        : <Route exact path="/" component={LandingPage} />
              }
              <PrivateRoute isAuthed={this.state.isAuthed} path="/echos" component={Echos} />
              <PrivateRoute isAuthed={this.state.isAuthed} path="/echo/:id" component={ViewEcho} />
              <PrivateRoute isAuthed={this.state.isAuthed} path="/profile" component={ProfilePage} />
            </Switch>
          </div>
        
          <Footer />
        

        </div>
      </Router>
    );
  }
}

export default App;