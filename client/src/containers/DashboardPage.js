import React, { Component } from 'react';
import './DashboardPage.css';
import Echos from './Echos'
import NewEcho from "./NewEcho"
import Rechos from './Rechos'

class DashboardPage extends Component {
  render() {
    return(
      <div id="dashboard-content" className="container">
      
      <div className="col-8">
        <NewEcho/>      
      	<Rechos/>
      </div>
      
      </div>

    
    );
  }
}

export default DashboardPage;