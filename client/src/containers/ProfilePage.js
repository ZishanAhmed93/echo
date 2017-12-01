import React, { Component } from 'react';
import './ProfilePage.css';

//import Echos from '../containers/Echos';
//import Likes from '../containers/Likes';

//Shell for the Profile Page

class ProfilePage extends Component {
	render() {
		return(
			<div className="container text-center" id="profile-content">
			<h1>Profile content</h1>

			//Profile pic
			<img src= "" class="img-responsive .img-circle" id="profile-pic"></img>
			//User Info
			<div id="user-info"></div>
			</div>
		);
}
}

export default ProfilePage;
