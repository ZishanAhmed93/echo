import React, { Component } from 'react';
import './DashboardPage.css';
import Echos from '../containers/Echos'

class DashboardPage extends Component {
  render() {
    return(
      <div className="container text-center" id="dashboard-content">
        <Echos />
        <a href="http://localhost:3000/NewEcho" id="newEcho">new echo button</a>
        
      </div>
    
    );
  }
}

export default DashboardPage;