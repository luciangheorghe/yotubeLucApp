import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import VideoSearch from './components/VideoSearch';
import VideoList from './components/VideoList';
import WhatsTrending from './components/WhatsTrending';
import UserSide from './components/UserSide';
import CategoryList from './components/CategoryList';
import axios from 'axios';

// https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key={YOUR_API_KEY}
// https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key={YOUR_API_KEY}
// https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=es&regionCode=US&key={YOUR_API_KEY}
const API_KEY = 'AIzaSyDINoVZF1uERv7i9nsC_LaIGZjqFCLC0SA';
const videoCategory = 1;

export default class App extends Component {
	state = {
		alldata: [],
		categories: []
	};

	componentDidMount() {
		axios
			.get(
				`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=${videoCategory}&key=${API_KEY}`
			)
			.then(res => {
				const alldata = res.data.items;
				// console.log(alldata);
				this.setState({
					alldata
				});
			});
		axios
			.get(
				`https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${API_KEY}`
			)
			.then(cat => {
				const categories = cat.data.items;
				console.log(categories);
				this.setState({
					categories
				});
			});
		// console.log(this.state.alldata);
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row main">
					<UserSide />

					<div className="col-10 top-videos">
						<div className="row header">
							<Header getCategories={this.state.categories} />
						</div>
						<div className="row topVideo-tranding">
							<VideoList getVideo={this.state.alldata} />

							<WhatsTrending getTrends={this.state.alldata} />
						</div>
					</div>
				</div>

				<VideoSearch getVideo={this.getVideo} />
			</div>
		);
	}
}
