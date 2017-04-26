import React from 'react';

import { PropTypes } from 'react-router';

class Directory extends React.Component {

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
						Directory
				</div>
      );
   }
}


Directory.contextTypes = { history: PropTypes.history }
export default Directory;
