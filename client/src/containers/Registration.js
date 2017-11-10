import React, {Component} from 'react';
import SignUpForm from '../components/RegistrationForm'
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
        this.props.onAuthChange(true);
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
      <SignUpForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        user={this.state.user}
      />
    );
  }
}

export default Registration;