import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class VideoList extends Component {
	render() {
		// console.log(this.props);
		return (
			<div className="col-md-10 topVideo">
				<h1 className="topVideos-title">Top Videos - Film and Animation</h1>
				<div className="videosContainer">
					{this.props.getVideo.map(video => (
						<Link
							to={{
								pathname: `/videoitem/${video.id}`,
								state: {
									videoid: video.id,
									videotitle: video.snippet.title,
									views: video.statistics.viewCount,
									like: video.statistics.likeCount,
									dislike: video.statistics.dislikeCount
								}
							}}
							key={video.id}
						>
							<div className="single-video">
								<div className="video-thumbnail">
									<img
										src={video.snippet.thumbnails.medium.url}
										alt={video.snippet.title}
									/>
								</div>
								<p className="video-title">
									{video.snippet.title.length < 20
										? `${video.snippet.title}`
										: `${video.snippet.title.substring(0, 25)}...`}
								</p>
								<p className="video-author"> {video.snippet.channelTitle} </p>
							</div>
						</Link>
					))}
				</div>
			</div>
		);
	}
}
export default VideoList;
