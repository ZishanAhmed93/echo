import React, { Component } from 'react'
import './LandingPage.css';

class LandingPage extends Component {
  constructor() {
    super();
  }

  handleChange(event) {
  }

  handleSubmit(event) {
  }

  render() {
    return(
      <div className="jumbotron jumbotron-fluid m-0" id="LandingPage-background">
        <div className="container " id="LandingPage-content">
          <h3 className="">Sign up to project your voice</h3>
					<br />
						<form onSubmit={this.handleSubmit}>
								<div class="form-group">
						    <label for="email">Email</label>
								<input type="email" class="form-control" id="email" />
								</div>

								<div class="form-group">
								<label for="fullName">Full Name</label>
							  <input type="text" class="form-control" id="fullName"/>
							  </div>

								<div class="form-group">
								<label for="UserName">User name</label>
								<input type="text" class="form-control" id="userName"/>
								</div>

								<div class="form-group">
								<label for="pwd">Password</label>
								<input type="password" class="form-control" id="pwd"/>
								</div>

								<button type="submit" class="btn btn-default" id="submit">Sign up</button>
					</form>
					<br />
					<p id="agreement">
						By signing up, you agree to our Terms & Private Policy.
					</p>
	    	</div>
	  	</div>
    );
  }
}

export default LandingPage;
