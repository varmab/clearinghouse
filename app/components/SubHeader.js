import React from 'react';
import { PropTypes } from 'react-router';

class SubHeader extends React.Component {




  constructor(props)
    {
        super(props)
        this.state = {

        };
    }

    componentDidMount() {
      var location = window.location.href;
      console.log(location);
      if(location.indexOf("request3") != -1 || location.indexOf("request2") != -1 ) {
        console.log("request3");
        $(".subHeaderOk").removeClass("activeSubHeaderStep inActiveSubHeaderStep");
        $(".subHeaderOk1").addClass("activeSubHeaderStep");
        $(".subHeaderOk2").addClass("activeSubHeaderStep");
        $(".subHeaderOk3").addClass("inActiveSubHeaderStep");
        $(".subHeaderOk4").addClass("inActiveSubHeaderStep");

        $(".subHeaderContentText").removeClass("activeSubHeaderContent");
        $(".subHeaderContent1").addClass("activeSubHeaderContent");
        $(".subHeaderContent2").addClass("activeSubHeaderContent");
      }
      else if(location.indexOf("request") != -1) {
        console.log("request3");
        $(".subHeaderOk").removeClass("activeSubHeaderStep inActiveSubHeaderStep");
        $(".subHeaderOk1").addClass("activeSubHeaderStep");
        $(".subHeaderOk2").addClass("inActiveSubHeaderStep");
        $(".subHeaderOk3").addClass("inActiveSubHeaderStep");
        $(".subHeaderOk4").addClass("inActiveSubHeaderStep");

        $(".subHeaderContentText").removeClass("activeSubHeaderContent");
        $(".subHeaderContent1").addClass("activeSubHeaderContent");
      }
      else if(location.indexOf("review") != -1) {
        console.log("request3");
        $(".subHeaderOk").removeClass("activeSubHeaderStep inActiveSubHeaderStep");
        $(".subHeaderOk1").addClass("activeSubHeaderStep");
        $(".subHeaderOk2").addClass("activeSubHeaderStep");
        $(".subHeaderOk3").addClass("activeSubHeaderStep");
        $(".subHeaderOk4").addClass("inActiveSubHeaderStep");

        $(".subHeaderContentText").removeClass("activeSubHeaderContent");
        $(".subHeaderContent1").addClass("activeSubHeaderContent");
        $(".subHeaderContent2").addClass("activeSubHeaderContent");
        $(".subHeaderContent3").addClass("activeSubHeaderContent");
      }
      else if(location.indexOf("submit") != -1) {
        console.log("request3");
        $(".subHeaderOk").removeClass("activeSubHeaderStep inActiveSubHeaderStep");
        $(".subHeaderOk1").addClass("activeSubHeaderStep");
        $(".subHeaderOk2").addClass("activeSubHeaderStep");
        $(".subHeaderOk3").addClass("activeSubHeaderStep");
        $(".subHeaderOk4").addClass("activeSubHeaderStep");

        $(".subHeaderContentText").removeClass("activeSubHeaderContent");
        $(".subHeaderContent1").addClass("activeSubHeaderContent");
        $(".subHeaderContent2").addClass("activeSubHeaderContent");
        $(".subHeaderContent3").addClass("activeSubHeaderContent");
        $(".subHeaderContent4").addClass("activeSubHeaderContent");
      }
    }

   render() {


      return (
        <div className="subHeaderSection">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
              <div className= "row">
                <div className="subHeaderContent leftAlign col-md-4">
                  <span className="glyphicon glyphicon-ok-sign subHeaderOk subHeaderOk1 activeSubHeaderStep" aria-hidden="true"></span>
                </div>
                <div className="subHeaderContent subHeaderContentText subHeaderContent1 activeSubHeaderContent col-md-8">
                  <div className="subHeaderSteps">Step 01</div>
                  <div className="subHeaderTitle">Search</div>
                </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="subHeaderContent leftAlign col-md-4">
                  <span className="glyphicon glyphicon-ok-sign inActiveSubHeaderStep subHeaderOk subHeaderOk2" aria-hidden="true"></span>
                </div>
                <div className="subHeaderContent subHeaderContentText subHeaderContent2 col-md-8">
                  <div className="subHeaderSteps">Step 02</div>
                  <div className="subHeaderTitle">Request Details</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="subHeaderContent leftAlign col-md-4">
                  <span className="glyphicon glyphicon-ok-sign inActiveSubHeaderStep subHeaderOk subHeaderOk3" aria-hidden="true"></span>
                </div>
                <div className="subHeaderContent subHeaderContentText subHeaderContent3 col-md-8">
                  <div className="subHeaderSteps">Step 03</div>
                  <div className="subHeaderTitle">Review</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="subHeaderContent leftAlign col-md-4">
                  <span className="glyphicon glyphicon-ok-sign inActiveSubHeaderStep subHeaderOk subHeaderOk4" aria-hidden="true"></span>
                </div>
                <div className="subHeaderContent subHeaderContentText subHeaderContent4 col-md-8">
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
