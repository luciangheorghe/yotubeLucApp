import React, { Component } from 'react';

class Header extends Component {
	getId = e => {
		e.preventDefault();
		const id = this.props.getCategories.items;
		console.log(this.props);
	};
	render() {
		// console.log(this.props);
		return (
			<div className="header-container">
				<nav className="navbar navbar-expand-lg">
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Top US Videos
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Categories
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									{this.props.getCategories.map(category => (
										<a
											id={category.snippet.title}
											onClick={this.GetId}
											key={category.id}
											className="dropdown-item"
											href="#"
										>
											{category.snippet.title}
										</a>
									))}
								</div>
							</li>
						</ul>
					</div>
				</nav>
				<div className="md-form mt-0 search">
					<input
						className="form-control"
						type="text"
						placeholder="Search"
						aria-label="Search"
					/>
				</div>
			</div>
		);
	}
}

export default Header;
