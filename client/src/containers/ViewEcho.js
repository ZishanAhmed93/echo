import React, {Component} from 'react';
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
    this.state = {echo: '',
				comments: [],
        subject: '',
				};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
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
    .then(json => console.log(json))
    .catch(err => {
      console.log(err.message);
    })
  }



componentDidMount(){

fetch(`/echos/${this.props.match.params.id}`)
.then((response) => response.json())
	.then((echo) => this.setState({echo})
	);				
		//const echo = jsonBody.map((c) => <Echo data ={c} />);
		
fetch(`/echos/${this.props.match.params.id}/comments`)
.then((response) => response.json())
  .then((comments) => this.setState({comments})
);

}

 

render()
{
return(
	<div>


  {this.state.echo.id} {this.state.echo.subject} {this.state.echo.comments}
	

  <div className = "ViewComments">
  	LIST OF Comments
    {this.state.comments.map(comment =>
    	<div key={comment.id}>
       {comment.User.fullname} : {comment.reflection}
    	 </div>
    	)}
  </div>


	


    <form onSubmit={this.handleSubmit}>
      <label>
        Comments:
        <input type='text' name="subject" onChange={this.handleChange} />
      </label>
      <input type='submit' value="Submit" />
    </form>

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
