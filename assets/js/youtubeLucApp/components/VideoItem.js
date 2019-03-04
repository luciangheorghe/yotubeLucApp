import React from 'react';
import { Link } from 'react-router-dom';

class VideoItem extends React.Component {
	state = {
		activeVideo: []
	};

	render() {
		console.log(this.props);
		const id = this.props.location.state.videoid;
		const title = this.props.location.state.videotitle;
		const like = this.props.location.state.like;
		const dislike = this.props.location.state.dislike;
		const views = this.props.location.state.views;
		return (
			<div className="container">
				<div className="videoitem">
					<div className="btn btn-light">
						<Link to="/">Back</Link>
					</div>
					<h1 className="singleItemTitle">LucApp</h1>
					<div className="singleItemVideo">
						<iframe
							width="700"
							height="450"
							src={'https://www.youtube.com/embed/' + id}
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>

					<div className="videoItemInfo">
						<div className="videoItemTitle">{title}</div>
						<div className="extras">
							<div className="views">{views} views</div>
							<div className="thumbsUpDown">
								<div className="thumbsUp">
									<div className="thumbsUpIcon">
										<i className="fas fa-thumbs-up" />
									</div>
									<div className="thumbsUpNo">{like}</div>
								</div>
								<div className="thumbsDown">
									<div className="thumbsDownIcon">
										<i className="fas fa-thumbs-down" />
									</div>
									<div className="thumbsDownNo">{dislike}</div>
								</div>
							</div>
						</div>
					</div>
					<div className="commentsSection">
						<h2 className="commentsTitle">Comments</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default VideoItem;
