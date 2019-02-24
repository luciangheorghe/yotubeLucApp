import React from 'react';

const Header = () => {
	return (
		<div>
			<ul>
				<li>Home</li>
				<li>Top Videos</li>
				<li>Categories</li>
			</ul>
			<form >
				<input type="text" name="videoPopular" />
				<button>Search</button>
			</form>
		</div>
	);
};

export default Header;
