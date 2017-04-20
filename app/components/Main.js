import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';

import { PropTypes } from 'react-router';

class Main extends React.Component {

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
				<div>
						<Header />

					<div className="container-fluid" style={{padding:"0px"}}>
						{this.props.children}
					</div>

				</div>
      );
   }
}


Main.contextTypes = { history: PropTypes.history }
export default Main;
