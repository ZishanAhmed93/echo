import React, { Component } from 'react'

class NewEcho extends Component {
  constructor() {
    super();
    this.state = {subject: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({subject: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/echos', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // This is the body parameter
      body: JSON.stringify({
        subject: this.state.subject
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => {
      console.log(err.message);
    })
  }

  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <label>
        Subject:
        <input type='text' name="subject" onChange={this.handleChange} />
      </label>
      <input type='submit' value="Submit" />
    </form>
    );
  }
}

export default NewEcho;

