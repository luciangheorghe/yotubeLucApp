import React from 'react';

const UserSide = () => {
	return (
		<div className="col-2 user-logo">
			<div className="row logo">LucApp</div>
			<div className="row user-info">
				<div className=" user-pic-name">
					<div className="row user-pic">
						<img src=".././img/luc-profile.jpg" alt="user-picture" />
					</div>

					<span className=" user-name">Luc Gheorghe</span>
					<div className=" edit-profile">Edit Profile</div>
				</div>
			</div>
			<div className="options">
				<div className="videos">
					<i className="fab fa-youtube" />
					<div className="text">Videos</div>
				</div>
				<div className="campaigns">
					<i className="fas fa-baseball-ball" />
					<div className="text">Campaigns</div>
				</div>
				<div className="favorites">
					<i className="fas fa-star" />
					<div className="text">Favorites</div>
				</div>
				<div className="wishlist">
					<i className="fas fa-align-justify" />
					<div className="text">Wishlist</div>
				</div>
				<div className="signout">
					<i className="fas fa-sign-out-alt" />
					<div className="text">Sign Out</div>
				</div>
			</div>
		</div>
	);
};

export default UserSide;
