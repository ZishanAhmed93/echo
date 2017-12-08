import React, { Component } from 'react';
import './DashboardPage.css';
import Echos from './Echos'
import NewEcho from "./NewEcho"
import Rechos from "./Rechos"

class DashboardPage extends Component {
  render() {
    return(
      <div className="container" id="dashboard-content">
      <div className="row">
      <div className="col-6">
        <NewEcho/>      
      	<Rechos/>
      </div>
     

      	<div className="col-6">
        <div> PROFILE THINGS</div>      
      	
      </div>
      </div>

      </div>

    
    );
  }
}

export default DashboardPage;