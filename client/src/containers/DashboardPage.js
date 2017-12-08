import React, { Component } from 'react';
import './DashboardPage.css';
import Echos from './Echos'
import NewEcho from "./NewEcho"
import Rechos from './Rechos'

class DashboardPage extends Component {
  render() {
    return(
      <div className="container text-center" id="dashboard-content">
        <NewEcho />

        <Rechos />
        
      </div>
    
    );
  }
}

export default DashboardPage;