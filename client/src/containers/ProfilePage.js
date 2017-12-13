import React, { Component } from 'react';
import './ProfilePage.css';
import testImage from '../design/download.png';
import { Panel, ControlLabel, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

import Echos from '../containers/Echos';

//Shell for the Profile Page

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
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
				<Grid >
					<Row className="show-grid ">
						<Col md={6} mdPull={6} >	
							<div className="profile-area text-center">
							<h3>{this.state.user.fullname}</h3>
							<Panel >
								<img src={testImage} alt="profile" />
								<div>
								<h4>Username: {this.state.user.username}</h4>
								<h4>Level: {this.state.user.level}</h4>
								<h4>Experience: {this.state.user.experience}</h4>
								</div>
							</Panel>
							</div>
						</Col>
						<Col md={6} mdPull={6} >	
							<Echos/>
						</Col>
					</Row>
				</Grid>
    );
  }
}

export default ProfilePage;
