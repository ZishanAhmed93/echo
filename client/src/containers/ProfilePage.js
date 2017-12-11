import React, { Component } from 'react';
import './ProfilePage.css';
import testImage from '../design/download.png';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';

import Echos from '../containers/Echos';

//Shell for the Profile Page

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
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
      <div className="container text-center" id="profile-content">
          <div className="profile-area">
          <h3>{this.state.fullname}</h3>
          <Panel >
            <img src={testImage} alt="profile" />
						<h4>Username: {this.state.username}</h4>
						<h4>Level: {this.state.level}</h4>
						<h4>Experience: {this.state.experience}</h4>
          </Panel>
					<Echos/>
          </div>
      </div>
    );
  }
}

export default ProfilePage;
