import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage';
import DashboardPage from '../components/DashboardPage'
import Footer from '../components/Footer';
import Login from './Login';
import Registration from './Registration';
import Echos from './Echos';
// import NewEcho from './NewEcho';
// import ViewEcho from './ViewEcho';

function PrivateRoute({component: Component, isAuthed, ...rest}) {
  return(
    <Route 
      {...rest}
      render={(props) => isAuthed === true 
        ? <Component {...props} /> 
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  );
}

function LoginOrRegisterRoute({component: Component, isAuthed, onAuthChange, ...rest}) {
  return(
    <Route 
      {...rest}
      render={(props) => isAuthed === true 
        ? <Redirect to={{pathname: '/', state: {from: props.location}}} />
        : <Component onAuthChange={onAuthChange} {...props} /> }
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
    return(
      <Router>
        <div>
          <Navbar isAuthed={this.state.isAuthed} />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <LoginOrRegisterRoute isAuthed={this.state.isAuthed} onAuthChange={this.handleAuth} path="/login" component={Login} />
            <LoginOrRegisterRoute isAuthed={this.state.isAuthed} onAuthChange={this.handleAuth} path="/registration" component={Registration} />
            <PrivateRoute isAuthed={this.state.isAuthed} path="/dashboard" component={DashboardPage}/>
            <PrivateRoute isAuthed={this.state.isAuthed} path="/echos" component={Echos} />
        {/* <Route path="/newecho" component={NewEcho}/>
            <Route path="/echo/:id" component={ViewEcho}/> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
