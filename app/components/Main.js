import React from 'react';
import HeaderNew from '../components/HeaderNew';


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

					

					<div className="container-fluid" style={{padding:"0px"}}>
						{this.props.children}
					</div>

				</div>
      );
   }
}


Main.contextTypes = { history: PropTypes.history }
export default Main;
