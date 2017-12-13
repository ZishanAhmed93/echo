import React, {Component} from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import loading from '../loading.svg';


class ViewEcho extends Component{

constructor() {
    super();
    this.state = {
      echo: {},
			comments: [],
      echofullName: "",
      user: {},
      isActive: false,
      onSubmit: false,
		};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

}


  componentDidMount(){
    fetch(`/echos/${this.props.match.params.id}`)
    .then((response) => response.json())
      .then((echo) => this.setState({echo})
      );  

    this.fetchComments();


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

  fetchComments() {
              
    fetch(`/echos/${this.props.match.params.id}/comments`)
    .then((response) => response.json())
      .then((comments) => this.setState({comments})
    );    
  }

  handleChange(event) {
    this.setState({reflection: event.target.value, isActive:true});
  }
  handleFocus(event){
    this.setState({isActive: true});
  }

  handleSubmit(event) {
    this.setState({onSubmit: true});

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

    let commentInput = this.refs.newCommentInput;
    commentInput.value = "";

    setTimeout(function(){
      this.setState({
        onSubmit: false,
        isActive: false,
      });
    }.bind(this), 1800);
  }

render()
{

    let posterFullName = ""
    if(this.state.echo.User !=  null)
      posterFullName = this.state.echo.User.fullname;
    let isActive = this.state.isActive;
    let onSubmit = this.state.onSubmit;    

    let userFullName = this.state.user.fullname;


return(
  <div className="col-8">
  
    <div className="tile">
      <div className ="tileHeader black54"> 
        {posterFullName} <span className ="pull-right"> {moment(this.state.echo.createdAt).format('MMM. D')} </span>
      </div>
      {this.state.echo.subject} {this.state.echo.comments}
    </div>

    
    <div className="tile mb16">
      {onSubmit ? <img className="loading mb8" src={loading} />
                : <form className="newPostInLine" onSubmit={this.handleSubmit}>  
                    <label>
                      {isActive ? this.state.user.fullname + ': ' 
                                : "Share your comment: "
                      }
                      <input ref="newCommentInput" type='text' name="subject" onChange={this.handleChange} onClick={this.handleFocus}/>
                    </label>
                    <input className="btn ctaButton" type='submit' value="Submit" />
                  </form>            
      }
    </div>
      
      
    <div className = "ViewComments">
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

}

export default ViewEcho
