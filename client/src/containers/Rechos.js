import React, {Component} from 'react';
import moment from "moment";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Rechos extends Component {
  constructor() {
    super();
    this.state = {
      rechos: [],
      user: {},
      currSubj:""
    }
    this.handleReecho = this.handleReecho.bind(this);
  }

  handleReecho(event, echoId, userId){

    event.preventDefault();
    fetch('/rechos', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      // This is the body parameter
      body: JSON.stringify({
        echoId: echoId,
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => {
      console.log(err.message);
    })
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
      .then((rechos) =>{ this.setState({rechos})
          console.log(JSON.stringify(rechos))

    }
    );

  fetch('/user',{
      method: "get",
      headers: {
        'Accept' : 'application.json',
        'Content-type' : 'application.json',

      },
      credentials: 'same-origin',
    })
    .then((response) => response.json())
      .then((user) => this.setState({user})
    );

  }

  render() {
    return(
      <div className = "container">

        
        {this.state.rechos.map(recho =>
          <div key={recho.id}>
            <div className="card">
            <div>{recho.Echo.User.fullname}<span className ="pull-right"> {moment(recho.Echo.createdAt).format('MMM. d')} </span></div>
            <div>{recho.Echo.subject}</div>
            <a href="#"  onClick={(e) => this.handleReecho(e, recho.Echo.id,recho.Echo.User.userId)}>Reecho</a>

            </div>
           </div>
          )}
      </div>
    )
  }
}

export default Rechos;
