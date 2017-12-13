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
      <div className = "container">
      	MY ECHOS
        {this.state.echos.map(echo =>
          <div key={echo.id}>
            <div className="tile">
            <div className ="tileHeader black54"><span className ="pull-right"> {moment(echo.createdAt).format('MMM. d')} </span></div>
            <div className = "tileBody">{echo.subject}</div>
            <span> <a className="tileFooter" href="#">Echo</a>
            <span className = "pull-right">
            <li className="tileFooter">
            <Link to={`/echo/${echo.id}`}> View All Comments </Link> 
            </li>
             </span>
            </span>
            </div>
           </div>
        	)}
      </div>
    )
  }
}

        	//<div key={echo.id}>
           // <li>{echo.subject}</li>
        	// </div>
export default Echos
