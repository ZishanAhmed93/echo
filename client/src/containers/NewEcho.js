import React, { Component } from 'react'
import './NewEcho.css';
import moment from "moment";
import loading from '../loading.svg';


class NewEcho extends Component {
  constructor() {
    super();
    this.state = {
      subject: '',
      userId: '',
      user: {},
      isActive: false,
      onSubmit:false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentDidMount() {
    fetch('/user', {
      method: "get",
      headers: {
        'Accept': 'application/json',
        'Concent-Type': 'application/json'
      },
      credentials: 'same-origin',
    })
    .then( (res) => res.json() )
      .then((userId) => this.setState({userId: userId}))


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


  handleChange(event) {
    this.setState({subject: event.target.value, isActive: true});
  }
  
  handleFocus(event){
    this.setState({isActive: true});
  }
  
  handleSubmit(event) {
    this.setState({onSubmit: true});

    event.preventDefault();
    fetch('/echos', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      // This is the body parameter
      body: JSON.stringify({
        subject: this.state.subject,
        userId: this.state.userId,
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => {
      console.log(err.message);
    })

    let echoInput = this.refs.newEchoInput;
    echoInput.value = "";

    setTimeout(function(){
      this.setState({
        onSubmit: false,
        isActive: false,
      });
    }.bind(this), 1800);

  }

    
    
    
  

  render() {
    let isActive = this.state.isActive;
    let onSubmit = this.state.onSubmit;
  
    return(
    <div id="NewEcho" className="tile" >
      
      {isActive ? <div className ="tileHeader black54 mb8"> {this.state.user.fullname} <span className ="pull-right"> {moment().format('MMM. D')} </span></div>
                : <div className = "tileHeader black54 centerText mb8" >What's new today {this.state.user.fullname}?</div>
      }
      
      {onSubmit ? <img className="loading mb8" src={loading} />
                : <form className="newPostInLine" onSubmit={this.handleSubmit}>   
                    <label> 
                      Subject:
                      <input ref="newEchoInput" onclick="isActive()" type='text' name="subject" placeholder="wassup" onChange={this.handleChange} onClick={this.handleFocus} />
                    </label>
                    <input type='submit' value="Submit" className="btn ctaButton" />
                  </form>
      }

    </div>
    );
  }
}

export default NewEcho;

