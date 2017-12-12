import React, {Component} from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
//import ViewComments from './ViewComments';

class ViewEcho extends Component{

constructor() {
    super();
    this.state = {
      echo: {},
			comments: [],
      subject: ''
		};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchComments = this.fetchComments.bind(this);

}

  componentDidMount(){
    fetch(`/echos/${this.props.match.params.id}`)
    .then((response) => response.json())
      .then((echo) => this.setState({echo})
      );  

    this.fetchComments();
  }

  fetchComments() {
              
    fetch(`/echos/${this.props.match.params.id}/comments`)
    .then((response) => response.json())
      .then((comments) => this.setState({comments})
    );    
  }

 handleChange(event) {
    this.setState({reflection: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/echos/${this.props.match.params.id}/comments`, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      // This is the body parameter
      body: JSON.stringify({
        reflection: this.state.reflection
      })
    })
    .then(res => res.json())
    .then(json => {
      this.fetchComments();
    })
    .catch(err => {
      console.log(err.message);
    })
  }

render()
{
return(
  <div>
  
  <div className="col-8">
    <div className="tile">
      <div className ="tileHeader black54"> 
        fullnamehere <span className ="pull-right"> {moment(this.state.echo.createdAt).format('MMM. d')} </span>
      </div>
      {this.state.echo.subject} {this.state.echo.comments}
  	</div>
  </div>

  <div className="col-8">
  <form className="tile newPostInLine" onSubmit={this.handleSubmit}>
    <label>
      Share your comment:
      <input type='text' name="subject" onChange={this.handleChange} />
    </label>
    <input className="btn ctaButton" type='submit' value="Submit" />
  </form>
  </div>

  <div className = "col-8 ViewComments">
  	Comments
    {this.state.comments.map(comment =>
      <div key={comment.id} className="tile">
        {comment.User.fullname} : {comment.reflection}
      </div>
    )}
  </div>

  </div>

)
}

/*({match}) => (
  <div>
    <h2>{match.params.id}</h2>
  </div>

)
*/
}

export default ViewEcho
