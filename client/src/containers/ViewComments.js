import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class ViewComments extends Component {


constructor() {
    super();
    this.state = {comments:[]}
    }


componentDidMount(){

fetch(`/echos/${this.props.match.params.id}`)
.then((response) => response.json())
  .then((echos) => this.setState({echos})
        
    //const echo = jsonBody.map((c) => <Echo data ={c} />);
    

);

}


render()
{

  
return(
  <div className = "ViewComments">
    LIST OF POSTS
    {this.state.comments.map(comment =>
      <div key={comment.id}>
      {comment.id} : {comment.subject}
       </div>
      )}
  </div>
)
}
}

export default ViewComments
