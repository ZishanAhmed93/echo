import React, { Component }from 'react'
import { Link } from 'react-router-dom'
import Logo from '../design/32.svg';
import './navbar.css';

class Navbar extends Component {


    constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
      }

    handleClick(event) {
    event.preventDefault();
    fetch('/echos', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // This is the body parameter
      body: JSON.stringify({
        subject: this.state.subject
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => {
      console.log(err.message);
    })
  }  

      render() {

        return (
      <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
        <a className="navbar-brand" href="/"><img src={Logo} className="mr-1" alt="Echo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="echos" className="nav-item nav-link" href="#">Echo</Link>
          </div>
          <div className="btn-group ml-5" role="group">
            <button id="navbarLoggedIn" type="button" className="btn btn-outline-info dropdown-toggle text-uppercase" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right" id="navLoginButton" aria-labelledby="navbarLoggedIn">
               {this.props.isAuthed ? (
              <a className="nav-item nav-link" href="#" onClick={this.handleClick}>Logout</a>
              ):(
              <Link to="login" className="nav-item nav-link" href="#" >Login</Link>
              )}
              {this.props.isAuthed ? (
              <Link to="login" className="nav-item nav-link" href="#">Profile</Link>
              ):(
              <Link to="Registration" className="nav-item nav-link" href="#">Registration</Link>
              )}              
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar