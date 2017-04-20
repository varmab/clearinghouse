import React from 'react';
import {IndexRoute, Route,Router,hasHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Training from '../components/Training';
import Directory from '../components/Directory';
import Request from '../components/Request';
import SignIn from '../components/SignIn';
import Register from '../components/Register';
import Details from '../components/Details';



export default (

	<Route name="app" path="/" component={Main}>
		<IndexRoute component={Home} />
		<Route path="/training" component={Training} />
		<Route path="/directory" component={Directory} />
		<Route path="/request" component={Request} />
		<Route path="/signin" component={SignIn} />
		<Route path="/register" component={Register} />
		<Route path="/details" component={Details} />


	</Route>
);
