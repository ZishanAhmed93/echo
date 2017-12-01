import React, { Component } from 'react'


class NewEcho extends Component {
  constructor() {
    super();
    this.state = {
      subject: '',
      userId: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

