import React from 'react';
import { Link,PropTypes} from 'react-router';


class Home extends React.Component {


	constructor(props) {
        super(props)
        this.state = {

        };
    }

	componentWillMount() {

	}


  componentDidMount() {
		$(".homeCheckDiv").click(function() {
		  $(this).find(".homeCheck").toggleClass("homeDivChecked")
		});
  }

	redirectTo(path) {
		this.context.history.pushState(null, '/'+path);
	}


  render() {
    return (
			<div>
			<Header />
      <div className="homeSection row">
				<div className="col-md-2"></div>
				<div className="col-md-8 homeDiv">
					<div className="homeTitle" >Training Splash Page</div>
					<div style={{marginTop: "5px"}}>(Welcome message or video)</div>

					<div className="homeSubContent">
						<div>The Process</div>
						<div style={{marginTop: "10px"}}>( Explanation and visual roadmap )</div>
					</div>

					<div className="homeSubContent">
						<div>Brand Guidlines</div>
					</div>

					<div className="homeSubContent">
						<div>Do's and Dont's Content</div>
					</div>

					<div className="homeSubContent">
						<div className="homeTitle" >Before Advancing</div>
						<div style={{marginTop: "10px"}}>Check that you have completed the following:</div>
					</div>

					<div className="row" style={{marginTop: "50px"}}>
						<div className="col-md-3"></div>
						<div className="col-md-6">
							<div className="input-group">
								<span className="input-group-addon homeCheckDiv" id="basic-addon1">
									<span className="glyphicon glyphicon-ok homeCheck" aria-hidden="true"></span>
								</span>
								<div type="text" className="form-control homeCheckText" placeholder="Username" aria-describedby="basic-addon1">
									<div className="homeCheckInnerText">I have completed task #1</div>
								</div>
							</div>
						</div>
						<div className="col-md-3"></div>
					</div>

					<div className="row" style={{marginTop: "20px"}}>
						<div className="col-md-3"></div>
						<div className="col-md-6">
							<div className="input-group">
								<span className="input-group-addon homeCheckDiv" id="basic-addon1">
									<span className="glyphicon glyphicon-ok homeCheck" aria-hidden="true"></span>
								</span>
								<div type="text" className="form-control homeCheckText" placeholder="Username" aria-describedby="basic-addon1">
									<div className="homeCheckInnerText">I have completed task #2</div>
								</div>
							</div>
						</div>
						<div className="col-md-3"></div>
					</div>

					<div className="row" style={{marginTop: "20px"}}>
						<div className="col-md-3"></div>
						<div className="col-md-6">
							<div className="input-group">
								<span className="input-group-addon homeCheckDiv" id="basic-addon1">
									<span className="glyphicon glyphicon-ok homeCheck" aria-hidden="true"></span>
								</span>
								<div type="text" className="form-control homeCheckText" placeholder="Username" aria-describedby="basic-addon1">
									<div className="homeCheckInnerText">I have completed task #3</div>
								</div>
							</div>
						</div>
						<div className="col-md-3"></div>
					</div>

					<div className="row" style={{marginTop: "50px", marginBottom: "20px"}}>
						<input type="button" className="btn nextButton" onClick={this.redirectTo.bind(this, "request")} value="Next: Start Request" />
					</div>

				</div>
				<div className="col-md-2"></div>

      </div>
			</div>
    );
  }
}
Home.contextTypes = { history: PropTypes.history }

export default Home;
