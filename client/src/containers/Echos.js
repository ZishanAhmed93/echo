import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import moment from "moment";

class Echos extends Component {
  constructor() {
    super();
    this.state = {
      echos: [],

    }
  }

  componentDidMount() {
    fetch('/echos',{
      headers: {
        'Accept' : 'application.json',
        'Content-type' : 'application.json',

      },
      credentials: 'same-origin',
    })
    .then((response) => response.json())
    	.then((echos) => this.setState({echos})
    );
  }

  render() {
    return(
      <div id="Echos" className = "container">
      	
        My Echos  
        {this.state.echos.reverse().map(echo =>
          <div key={echo.id}>

            <div className="tile echoPost">
              
              <div className ="tileHeader black54">
                {echo.User.fullname}
                <span className ="pull-right">
                  {moment(echo.createdAt).format('MMM. d')} 
                </span>
              </div>
              
              <div className = "tileBody">
                {echo.subject}
              </div>
              
              <span> 
                <span className="tileFooter"></span>
                <span className = "pull-right">
                  <div className="tileFooter">
                    <Link to={`/echo/${echo.id}`}> View All Comments </Link> 
                  </div>
                </span>
              </span>

            </div>
           </div>
        	)}
      </div>
    )
  }
}
export default Echos;
