import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import youtube from './components/YoutubeAPI';
import Header from './components/Header';
import VideoSearch from './components/VideoSearch';
import CategoryList from './components/CategoryList';
// import axios from 'axios';

// https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key={YOUR_API_KEY}
// https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key={YOUR_API_KEY}
const API_KEY = 'AIzaSyDINoVZF1uERv7i9nsC_LaIGZjqFCLC0SA';

export default class App extends Component {
	state = {
		videos: []
	};
	getVideo = async e => {
		const videoInfo = e.target.elements.videoInfo.value;
		e.preventDefault();
		console.log(videoInfo);
		const api_call = await fetch(
			`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`
		);
		const data = await api_call.json();
		console.log(data.items[0].id);
		this.setState({
			videos: data.items
		});
		console.log(this.state.videos);
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="row main">
					<div className="col-3 user-logo">
						<div className="row logo">LucApp</div>
						<div className="row user-info">
							<div className="row user-pic-name">
								<div className="user-pic">
									<img src=".././img/luc-profile.jpg" alt="" />
								</div>

								<span className="user-name">Luc Gheorghe</span>
								<div className="edit-profile">Edit Profile</div>
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

					<div className="col-9 top-videos">
						<div className="row header">
							<Header />
						</div>
						<div className="row topVideo-tranding">
							<div className="col-md-9 topVideo">
								<h1 className="topVideos-title">Top Videos</h1>
								<div className="videosContainer">
									<div className="single-video">
										<div className="video-thumbnail">
											<img
												src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg"
												alt=""
											/>
										</div>
										<p className="video-title">Title</p>
										<span className="video-author"> author </span>
									</div>
									<div className="single-video">
										<div className="video-thumbnail">
											<img
												src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg"
												alt=""
											/>
										</div>
										<p className="video-title">Title</p>
										<span className="video-author"> author </span>
									</div>
									<div className="single-video">
										<div className="video-thumbnail">
											<img
												src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg"
												alt=""
											/>
										</div>
										<p className="video-title">Title</p>
										<span className="video-author"> author </span>
									</div>
									<div className="single-video">
										<div className="video-thumbnail">
											<img
												src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg"
												alt=""
											/>
										</div>
										<p className="video-title">Title</p>
										<span className="video-author"> author </span>
									</div>
									<div className="single-video">
										<div className="video-thumbnail">
											<img
												src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg"
												alt=""
											/>
										</div>
										<p className="video-title">Title</p>
										<span className="video-author"> author </span>
									</div>
									<div className="single-video">
										<div className="video-thumbnail">
											<img
												src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg"
												alt=""
											/>
										</div>
										<p className="video-title">Title</p>
										<span className="video-author"> author </span>
									</div>
									<div className="single-video">
										<div className="video-thumbnail">
											<img
												src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg"
												alt=""
											/>
										</div>
										<p className="video-title">Title</p>
										<span className="video-author"> author </span>
									</div>
									<div className="single-video">
										<div className="video-thumbnail">
											<img
												src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg"
												alt=""
											/>
										</div>
										<p className="video-title">Title</p>
										<span className="video-author"> author </span>
									</div>
									<div className="single-video">
										<div className="video-thumbnail">
											<img
												src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg"
												alt=""
											/>
										</div>
										<p className="video-title">Title</p>
										<span className="video-author"> author </span>
									</div>
									<div className="single-video">
										<div className="video-thumbnail">
											<img
												src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg"
												alt=""
											/>
										</div>
										<p className="video-title">Title</p>
										<span className="video-author"> author </span>
									</div>
								</div>
							</div>
							<div className="col-md-3 whatstranding" />
						</div>
					</div>
				</div>

				<VideoSearch getVideo={this.getVideo} />
			</div>
		);
	}
}
