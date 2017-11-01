import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {username: '',
                  email: '',
                  password: '' ,
                  

                  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value,
                  email: event.target.value ,
                  password: event.target.value,
                  
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/users:register`, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // This is the body parameter
      body: JSON.stringify({
        username: this.state.username ,
        email:    this.state.email,
        password: this.state.password ,
        
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => {
      console.log(err.message);
    })
  }

  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <label>
        username:
        <input type='text' name="username" onChange={this.handleChange} />
        <br/>
        email:
      <input type='text' name="email" onChange={this.handleChange} />
      <br/>
        password:
        <input type='text' name="password" onChange={this.handleChange} />
        </label>
        <br/>
      <input type='submit' value="Submit" />
    </form>
    );
  }
}

export default LogIn;