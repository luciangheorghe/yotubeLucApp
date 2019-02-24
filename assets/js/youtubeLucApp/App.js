import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import youtube from './components/YoutubeAPI';
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
		// console.log(data.items[0].id);
		this.setState({
			videos: data.items
		});
		console.log(this.state.videos);
	};

	render() {
		return (
			<div className="container" style={{ marginTop: '1em' }}>
				<h1>hello try</h1>
				<VideoSearch getVideo={this.getVideo} />
				{this.state.videos.map(video => {
					return (
						<div key={video.id}>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/${video.id}"
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
							<p>{video.snippet.title}</p>
						</div>
					);
				})}
			</div>
		);
	}
}
