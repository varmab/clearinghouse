import React from 'react';
import { PropTypes } from 'react-router';

class SubHeader extends React.Component {




  constructor(props)
    {
        super(props)
        this.state = {

        };
    }

   render() {


      return (
        <div className="subHeaderSection">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
              <div className= "row">
                <div className="subHeaderContent leftAlign col-md-4">
                  <span className="glyphicon glyphicon-ok-sign activeSubHeaderStep" aria-hidden="true"></span>
                </div>
                <div className="subHeaderContent col-md-8">
                  <div className="subHeaderSteps">Step 01</div>
                  <div className="subHeaderTitle">Search</div>
                </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="subHeaderContent leftAlign col-md-4">
                  <span className="glyphicon glyphicon-ok-sign inactiveSubHeaderStep" aria-hidden="true"></span>
                </div>
                <div className="subHeaderContent col-md-8">
                  <div className="subHeaderSteps">Step 02</div>
                  <div className="subHeaderTitle">Request Details</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="subHeaderContent leftAlign col-md-4">
                  <span className="glyphicon glyphicon-ok-sign inactiveSubHeaderStep" aria-hidden="true"></span>
                </div>
                <div className="subHeaderContent col-md-8">
                  <div className="subHeaderSteps">Step 03</div>
                  <div className="subHeaderTitle">Review</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="subHeaderContent leftAlign col-md-4">
                  <span className="glyphicon glyphicon-ok-sign inactiveSubHeaderStep" aria-hidden="true"></span>
                </div>
                <div className="subHeaderContent col-md-8">
                  <div className="subHeaderSteps">Step 04</div>
                  <div className="subHeaderTitle">Confirmation</div>
                </div>
              </div>
            </div>
          </div>
		  	</div>
      );
   }
}

SubHeader.contextTypes = { history: PropTypes.history }
export default SubHeader;
