import React, { Component } from 'react';
import './DashboardPage.css';
import Echos from '../containers/Echos'

class DashboardPage extends Component {
  render() {
    return(
      <div className="container text-center" id="dashboard-content">
        {Echos}
        <p>placeholder for new echo button</p>
          
      </div>
    
    );
  }
}

export default DashboardPage;