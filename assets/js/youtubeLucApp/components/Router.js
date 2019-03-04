import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import VideoItem from './VideoItem';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={App} exact />
			<Route path="/videoitem/:id" component={VideoItem} />
		</Switch>
	</BrowserRouter>
);

export default Router;
