import React, { Component }from 'react'
import { Link } from 'react-router-dom'
import Logo from '../design/32.svg';
import './navbar.css';

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
        <a className="navbar-brand" href="/"><img src={Logo} className="mr-1" alt="Echo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="echos" className="nav-item nav-link" href="#">Echo</Link>
            <Link to="login" className="nav-item nav-link" href="#">Login</Link>
              

          </div>
          
        </div>

      </nav>
    );
  }
}

export default Navbar