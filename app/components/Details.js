import React from 'react';

import { PropTypes } from 'react-router';

class Details extends React.Component {

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
						Details Page
				</div>
      );
   }
}


Details.contextTypes = { history: PropTypes.history }
export default Details;