import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import youtube from './components/YoutubeAPI';
import Header from './components/Header';
import VideoSearch from './components/VideoSearch';
import VideoList from './components/VideoList';
import WhatsTrending from './components/WhatsTrending';
import UserSide from './components/UserSide';
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
					<UserSide />

					<div className="col-10 top-videos">
						<div className="row header">
							<Header />
						</div>
						<div className="row topVideo-tranding">
							<VideoList />
							<WhatsTrending />
						</div>
					</div>
				</div>

				<VideoSearch getVideo={this.getVideo} />
			</div>
		);
	}
}
