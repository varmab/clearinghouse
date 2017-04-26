import React from 'react';

import { PropTypes } from 'react-router';

class Training extends React.Component {

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
						Training
				</div>
      );
   }
}


Training.contextTypes = { history: PropTypes.history }
export default Training;
