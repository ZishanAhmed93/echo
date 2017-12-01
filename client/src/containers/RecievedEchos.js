import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class RecievedEchos extends Component {
  constructor() {
    super();
    this.state = {recievedEchos:[]}
  }

  componentDidMount(){
    fetch(`/rechos/${this.props.match.params.id}`)
    .then((response) => response.json())
      .then((recivedEchos) => this.setState({recievedEchos})
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

export default RecievedEchos
