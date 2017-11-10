import React, {Component} from 'react';
import RegistrationForm from '../components/RegistrationForm'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Registration extends Component {
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
      return(<Redirect to="/" />);
    }

    return (



        <div className="jumbotron jumbotron-fluid m-0" id="home-background">
        <div className="container text-center" id="home-content">
          <h1 className="display-3">Welcome to Echo!</h1>
          
          <p className="lead text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p className="lead">
            <RegistrationForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              user={this.state.user}
            />
          </p>
        </div>
      </div>

 
    );
  }
}

export default Registration;