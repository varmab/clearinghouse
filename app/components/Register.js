import React from 'react';

import { PropTypes } from 'react-router';

class Register extends React.Component {

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
						Register Page
				</div>
      );
   }
}


Register.contextTypes = { history: PropTypes.history }
export default Register;
