import React from 'react';
import {IndexRoute, Route,Router,hasHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
//import Training from '../components/Training';
import Directory from '../components/Directory';
import Request from '../components/Request';
import SignIn from '../components/SignIn';
import Register from '../components/Register';
import Home1 from '../components/Home1';
import Admin2 from '../components/Admin2';

export default (

	<Route name="app" path="/" component={Main}>
		<IndexRoute component={Home1} />
		<Route path="/training" component={Home} />
		<Route path="/directory" component={Directory} />
		<Route path="/request" component={Request} />
		<Route path="/signin" component={SignIn} />
		<Route path="/register" component={Register} />
		<Route path="/home1" component={Home1} />
		<Route path="/admin" component={Admin2} />
	</Route>
);
