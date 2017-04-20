import React from 'react';

import { PropTypes } from 'react-router';

class Request extends React.Component {

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
						Request Library
				</div>
      );
   }
}


Request.contextTypes = { history: PropTypes.history }
export default Request;
