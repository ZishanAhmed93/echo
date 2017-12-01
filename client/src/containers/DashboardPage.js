import React, { Component } from 'react';
import './DashboardPage.css';
import Echos from './Echos'
import NewEcho from "./NewEcho"

class DashboardPage extends Component {
  render() {
    return(
      <div className="container text-center" id="dashboard-content">
        <NewEcho />

        <a href="http://localhost:3000/NewEcho" id="newEcho">new echo button</a>
        
      </div>
    
    );
  }
}

export default DashboardPage;