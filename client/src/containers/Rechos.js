import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Rechos extends Component {
  constructor() {
    super();
    this.state = {
      rechos: [],
    }
  }

  componentDidMount() {
    fetch('/rechos',{
      headers: {
        'Accept' : 'application.json',
        'Content-type' : 'application.json',

      },
      credentials: 'same-origin',
    })
    .then((response) => response.json())
      .then((rechos) => this.setState({rechos})
    );
  }

  render() {
    return(
      <div>
        RECHOS
        {this.state.rechos.map(recho =>
          <div key={recho.id}>
          <li><Link to={`echo/${recho.EchoId}`}>{recho.EchoId}</Link></li>
           </div>
          )}
      </div>
    )
  }
}

export default Rechos;
