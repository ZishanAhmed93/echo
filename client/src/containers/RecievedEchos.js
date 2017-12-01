import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class RecievedEchos extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      rechos:[]
    }
  }

  componentDidMount(){
    fetch('/rechos', {
      method : 'get',
      headers: {
        'Accept' : 'application.json',
        'Content-type' : 'application/json'
      },
      credentials: 'same-origin',
    })
    .then((response) => response.json())
      .then((rechos) => this.setState({rechos}))
  }

  render() {
    return(
      <div>
        Inbox
        {this.state.rechos.map(recho =>
          <div key={recho.id}>
          <li><Link to={`rechos/${recho.id}`}> {recho.id}</Link></li>
           </div>
          )}
      </div>
    )
  }


}

export default RecievedEchos
