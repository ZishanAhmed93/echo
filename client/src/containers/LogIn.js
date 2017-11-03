import React, {Component} from 'react';
import LogInForm from '../components/LogInForm'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  errors:{},
                    user:
                    { username: '',
                      email: '',
                      password: '' ,
                    }
                  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user                 
    });
  }

  handleSubmit(event) {

    event.preventDefault();

    


    fetch("/login", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      // This is the body parameter
      body: JSON.stringify({
        email:    this.state.user.email,
        password: this.state.user.password ,
        
      })
    })
    .then( res => {
       if(res.status === 200){
         this.setState({});
       };
})
    .catch(err => {
     console.log(err) 
    })
  }


  render() {
    return (
      <LogInForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

  /*render() {
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
  } */
}

export default LogIn;