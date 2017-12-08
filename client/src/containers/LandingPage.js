import React, {Component} from 'react';
import RegistrationForm from '../components/RegistrationForm'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';



import Snippet from '../components/Snippet';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        fullname: '',
        username: '',
        password: '' 
      },
      isLoggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({
      user                 
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/register", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        email:    this.state.user.email,
        fullname: this.state.user.fullname,
        username: this.state.user.username ,
        password: this.state.user.password ,
      })
    })
    .then(res => {
      if(res.status === 200) {
        this.setState({isLoggedIn: true});
      } else {
        // Need to implement feedback as to why registration fails.
        console.log("registration failed");
      }
    })
    .catch(err => {
     console.log(err.message); 
    });
  }

  render() {
    let isLoggedIn = this.state.isLoggedIn;
    console.log(isLoggedIn);
    if(isLoggedIn) {
      window.location.reload();
    }

    return (

        <div className="jumbotron jumbotron-fluid m-0" id="home-background">
        <div className="container text-center" id="home-content">

        <div className="row">
          
          <div className= "col-6">
            <Snippet />
          </div>
          
          <div className = "col-6 tile">
            <h2>Sign up to project your voice</h2>
            <RegistrationForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              user={this.state.user}
            />
          </div>
          </div>

        </div>
      </div>

 
    );
  }
}

export default LandingPage;


