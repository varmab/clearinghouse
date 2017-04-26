import React from 'react';

import { PropTypes } from 'react-router';

class SignIn extends React.Component {

	constructor(props) {
        super(props)
        this.state = {

        };
    }

	componentWillMount() {

	}

	componentWillReceiveProps() {

	}

   render() {
      return (
				<div className="samplePage">
						SignIn Page
				</div>
      );
   }
}


SignIn.contextTypes = { history: PropTypes.history }
export default SignIn;
