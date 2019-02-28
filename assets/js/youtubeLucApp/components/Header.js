import React from 'react';

const Header = () => {
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
								Top Videos
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
								<a className="dropdown-item" href="#">
									Film and Animation
								</a>
								<a className="dropdown-item" href="#">
									Short Movies
								</a>

								<a className="dropdown-item" href="#">
									Entertainment
								</a>
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
};

export default Header;
