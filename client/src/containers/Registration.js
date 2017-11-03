import React, {Component} from 'react';
import SignUpForm from '../components/RegistrationForm'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class Registration extends Component {
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

    


    fetch("/register", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // This is the body parameter
      body: JSON.stringify({
        username: this.state.user.username ,
        email:    this.state.user.email,
        password: this.state.user.password ,
        
      })
    })
    .then( res => {
       //if(res.status == 200){
        //this.setState({ 
        //errors: {} 
        //});
        //console.log(res.status);
      //return;
      //} else {
        //this.setState({
          //errors: {}
        //});
        console.log(res);
        return res.json();
      
      //}
})
      
    .then(json => {
      console.log(json);
      this.setState({
        //errors:json.errors,
      })
      //console.log(this.state.errors)
    

    })
    .catch(err => {
     console.log(err) 
    })
  }


  render() {
    return (
      <SignUpForm
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

export default Registration;