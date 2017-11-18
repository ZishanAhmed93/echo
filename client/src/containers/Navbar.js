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
    fetch('/logout/')
    .then((res) => {res.json()
     if(res.status === 200){
        // this.setState({isLoggedIn: true});
         this.props.onAuthChange(false);
       }
  
    });
  }  

      render() {

        return (
      <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
        <a className="navbar-brand" href="/"><img src={Logo} className="mr-1" alt="Echo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
         
        {this.props.isAuthed? (
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="echos" className="nav-item nav-link" href="#">Echo</Link>
            <a className="nav-item nav-link" href="#" onClick={this.handleClick}>LogOut</a>            
          </div>
          ):(
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="echos" className="nav-item nav-link" href="#">Echo</Link>
            <Link to="login" className="nav-item nav-link" href="#">LogIn</Link>
          </div>

          )}
{/*
<<<<<<< HEAD
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
=======
          
>>>>>> 3b9443052ece86f7c47f22ff7d43a6d7f715649b
*/}
        </div>

      </nav>
    );
  }
}

export default Navbar