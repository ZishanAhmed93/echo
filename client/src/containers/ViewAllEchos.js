import React, {Component} from 'react';


class ViewAllEchos extends Component {


constructor() {
    super();
    this.state = {echos:[]}
    }


componentDidMount(){

fetch('/echos')
.then((response) => response.json())
	.then((echos) => this.setState({echos})
				
		//const echo = jsonBody.map((c) => <Echo data ={c} />);
		

);

}


render()
{

	
return(
  <div className = "ViewAllEchos">
  	LIST OF POSTS
    {this.state.echos.map(echo =>
    	<div key={echo.id}>
    	{echo.id} : {echo.subject} </div>
    	)}
  </div>
)
}
}

export default ViewAllEchos
