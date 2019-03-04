import React, { Component } from 'react';

class WhatsTrending extends Component {
	render() {
		// console.log(this.props);
		return (
			<div className="col-md-2 whatstrending">
				<h1 className="trendingTitle">whats trending</h1>
				<div className="trendingContainer">
					{this.props.getTrends.map(trend => (
						<div className="onetrend" key={trend.id}>
							<div className="id">
								<div className="id-align">{trend.snippet.categoryId}</div>
							</div>
							<div className="hashtagname">#{trend.snippet.tags[0]}</div>
							<div className="likeno">
								<div className="text-align">{trend.statistics.likeCount}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default WhatsTrending;
