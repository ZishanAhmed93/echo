import React, {Component} from 'react';
import moment from "moment";
import './Rechos.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Rechos extends Component {
  constructor() {
    super();
    this.state = {
      rechos: [],
      user: {},
      currSubj:""
    }
    this.handleRecho = this.handleRecho.bind(this);
  }

  handleRecho(echoId, event){

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
      <div id="Rechos">

        {this.state.rechos.map(recho =>
          <div key={recho.id}>
            
              <div className="tile echoPost">
               
               <div className ="tileHeader black54">
                {recho.Echo.User.fullname}
                <span className ="pull-right"> 
                  {moment(recho.Echo.createdAt).format('MMM. D')} 
                </span>
              </div>
              
              <div className = "tileBody">
                {recho.Echo.subject}
              </div>
              
              <span> 
                <a className="tileFooter" href="#"  onClick={(e) => this.handleRecho(recho.Echo.id, e)}>Recho</a>
                <span className = "pull-right">
                  <div className="tileFooter">
                    <Link to={`/echo/${recho.Echo.id}`}> View All Comments </Link> 
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

export default Rechos;