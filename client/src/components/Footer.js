import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="container-fluid text-center" id="footer">
        <div className="row navbar-light">
          <div className="col">
            <nav className="nav justify-content-center mt-4 footer-link">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/faq" className="nav-link">FAQ</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
            <nav className="nav justify-content-center footer-link">
              <a className="nav-link pr-2" href="http://www.facebook.com"><i className="fa fa-facebook-official" aria-hidden="true"/></a>
              <a className="nav-link pr-2" href="https://www.pinterest.com"><i className="fa fa-instagram" aria-hidden="true"/></a>
              <a className="nav-link pr-2" href="https://www.twitter.com"><i className="fa fa-twitter" aria-hidden="true"/></a>
              <a className="nav-link" href="https://www.tumblr.com"><i className="fa fa-tumblr-square" aria-hidden="true"/></a>
            </nav>
            <p className="mt-2 mb-4">Echo &copy; 2017</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;