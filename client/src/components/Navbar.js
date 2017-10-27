import React, { Component }from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
        <a className="navbar-brand" href="#">Echo Logo</a>
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
              <Link to="login" className="nav-item nav-link" href="#">Login</Link>
              <Link to="register" className="nav-item nav-link" href="#">Register</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar