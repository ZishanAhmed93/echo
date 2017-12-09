import React, { Component }from 'react'
import { Link } from 'react-router-dom'
import Logo from '../design/32.svg';
import './navbar.css';
import LogIn from '../containers/LogIn.js';
import LogInForm from '../components/LogInForm';

class Navbar extends Component {

    constructor(props) {
    super(props);
    
    
    this.state = {
      user: { 
        email: '',
        password: '',
      }
    };
    this.handleLogInForm = this.handleLogInForm.bind(this);
    this.handleLogInSubmit = this.handleLogInSubmit.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

handleLogInForm(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user                 
    });
  }

  handleLogInSubmit(event) {
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
         this.setState({isLoggedIn: true});
         this.props.onAuthChange(true);
       } else {
         // Need to implement feedback as to why registration fails.
       }
    })
    .catch(err => {
      console.log(err) 
    })
  }



    handleLogOut(event) {
    event.preventDefault();
  
      fetch("/logout", {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "same-origin",
    })
    .then(res => {
      if(res.status === 200) {
       this.props.onAuthChange(false);
      }
    });
  }
  

      render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
          
          <a className="navbar-brand" href="/"><img src={Logo} className="mr-1" alt="Echo" /></a>
           
          {this.props.isAuthed? 
          (
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/echos" className="nav-item nav-link" href="#">Echo</Link>
              <Link to="/profile" className="nav-item nav-link" href="#">Profile</Link>
              <a className="nav-item nav-link" href="#" onClick={this.handleLogOut}>LogOut</a>            
            </div>
          ):(
            <div className="navbar-nav">
                  <LogInForm
                    handleSubmit={this.handleLogInSubmit}
                    handleChange={this.handleLogInForm}
                    user={this.state.user}
                  />
                </div>
          )}
      </nav>
    );
  }
}

export default Navbar