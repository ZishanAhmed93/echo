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
          <h3>{this.state.username}</h3>
          <Panel >
            <img src={testImage} alt="profile" />
            <div>
            <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
            </div>
            <div>
            <ControlLabel><Glyphicon glyph="user" /> Email</ControlLabel>
            </div>
          </Panel>
					<Echos/>
          </div>
      </div>
    );
  }
}

export default ProfilePage;
