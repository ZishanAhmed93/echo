import React, { Component } from 'react';
import './DashboardPage.css';
import ViewAllEchos from '../containers/ViewAllEchos'

class DashboardPage extends Component {
  render() {
    return(
      <div className="container text-center" id="dashboard-content">
        {ViewAllEchos}
        <p>placeholder for new echo button</p>
          
      </div>
    
    );
  }
}

export default DashboardPage;