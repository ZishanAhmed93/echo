import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Echos extends Component {
  constructor() {
    super();
    this.state = {echos:[]}
  }

  componentDidMount(){
    fetch('/echos')
    .then((response) => response.json())
    	.then((echos) => this.setState({echos})
    );
  }

  render() {
    return(
      <div>
      	ECHOS
        {this.state.echos.map(echo =>
        	<div key={echo.id}>
          <li><Link to={`echo/${echo.id}`}> {echo.id} : {echo.subject}</Link></li>
        	 </div>
        	)}
      </div>
    )
  }
}

export default Echos
