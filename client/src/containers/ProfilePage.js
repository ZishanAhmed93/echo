import React, { Component } from 'react';
import './ProfilePage.css';
import testImage from '../design/download.png';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';

import Echos from '../containers/Echos';

//Shell for the Profile Page

class ProfilePage extends Component {
  render() {
    return(
      <div className="container text-center" id="profile-content">
          <div className="profile-area">
          <h1>John Doe</h1>
          <Panel header="Profile">
            <img src={testImage} alt="profile" />
            <div>
            <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
            </div>
            <div>
            <ControlLabel><Glyphicon glyph="user" /> Email</ControlLabel>
            </div>
            <pre></pre>
          </Panel>
          </div>
      </div>
    );
  }
}

export default ProfilePage;
