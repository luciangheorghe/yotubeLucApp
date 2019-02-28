import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import youtube from './components/YoutubeAPI';
import Header from './components/Header';
import VideoSearch from './components/VideoSearch';
import VideoList from './components/VideoList';
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

					<div className="col-10 top-videos">
						<div className="row header">
							<Header />
						</div>
						<div className="row topVideo-tranding">
							<VideoList />
							<div className="col-md-2 whatstrending">
								<h1 className="trendingTitle">whats trending</h1>
								<div className="trendingContainer">
									<div className="onetrend">
										<div className="id">
											<div className="id-align">ID</div>
										</div>
										<div className="hashtagname">#life</div>
										<div className="likeno">
											<div className="text-align">203k</div>
										</div>
									</div>
									<div className="onetrend">
										<div className="id">
											<div className="id-align">ID</div>
										</div>
										<div className="hashtagname">#life</div>
										<div className="likeno">
											<div className="text-align">203k</div>
										</div>
									</div>
									<div className="onetrend">
										<div className="id">
											<div className="id-align">ID</div>
										</div>
										<div className="hashtagname">#life</div>
										<div className="likeno">
											<div className="text-align">203k</div>
										</div>
									</div>
									<div className="onetrend">
										<div className="id">
											<div className="id-align">ID</div>
										</div>
										<div className="hashtagname">#life</div>
										<div className="likeno">
											<div className="text-align">203k</div>
										</div>
									</div>
									<div className="onetrend">
										<div className="id">
											<div className="id-align">ID</div>
										</div>
										<div className="hashtagname">#life</div>
										<div className="likeno">
											<div className="text-align">203k</div>
										</div>
									</div>
									<div className="onetrend">
										<div className="id">
											<div className="id-align">ID</div>
										</div>
										<div className="hashtagname">#life</div>
										<div className="likeno">
											<div className="text-align">203k</div>
										</div>
									</div>
									<div className="onetrend">
										<div className="id">
											<div className="id-align">ID</div>
										</div>
										<div className="hashtagname">#life</div>
										<div className="likeno">
											<div className="text-align">203k</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<VideoSearch getVideo={this.getVideo} />
			</div>
		);
	}
}
