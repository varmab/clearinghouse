import React from 'react';
import {IndexRoute, Route,Router,hasHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
//import Training from '../components/Training';
import Directory from '../components/Directory';
import Request from '../components/Request';
import Request2 from '../components/Request2';
import Request3 from '../components/Request3';
import SignIn from '../components/SignIn'
import Register from '../components/Register';
import Home1 from '../components/Home1';
import Review from '../components/Review';
import LoginPage from '../components/LoginPage';
import Submit from '../components/Submit';
import Admin2 from '../components/Admin2';
import AdminApproval from '../components/AdminApproval';

export default (

	<Route name="app" path="/" component={Main}>
		<IndexRoute component={LoginPage} />
		<Route path="/loginPage" component={LoginPage} />
		<Route path="/training" component={Home} />
		<Route path="/directory" component={Directory} />
		<Route path="/request" component={Request} />
		<Route path="/request2" component={Request2} />
		<Route path="/request3" component={Request3} />
		<Route path="/signin" component={SignIn} />
		<Route path="/register" component={Register} />
		<Route path="/review" component={Review} />
		<Route path="/home1" component={Home1} />
		<Route path="/submit" component={Submit} />
		<Route path="/admin2" component={Admin2} />
		<Route path="/adminapproval" component={AdminApproval} />
	</Route>
);
