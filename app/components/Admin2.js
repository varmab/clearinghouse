import React from 'react';
import { Link,PropTypes} from 'react-router';
import HeaderNew from '../components/HeaderNew';

class Admin2 extends React.Component {


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

		    <div id="main" className="page-content">

		      <div className="mypage-header"  style={{backgroundColor: "#D4AF37", height: "268px"}}>

						<HeaderNew />

            <div className="container mypage-content">
              <div className="row">
                <div className="col-xs-2 col-md-1">
                  <div className="whitecir">
                    <img src="./images/profile.jpeg" width={55} height={55} style={{verticalAlign: 'middle', opacity: 1}} className="img img-circle" />
                  </div>
                </div>
                <div className="col-xs-8 col-md-9">
                  <div className="text-field">
                    <div className="headerGreetings">Good Afternoon</div>
										<span className="adminSpan">ADMINISTRATOR</span><br/>
                    <div>Wes WarrenCMO,Corporate Communication</div>
										<div className="row adminHeaderDetailsRow">
											<div className="col-md-4 adminHeaderDetails">
												<div className="row">
													<div className="col-md-9">
														<div className="adminHeaderDetailsContent">
															<div># OF ACTIVE</div>
															<div>REQUESTES</div>
														</div>
														<div style={{width: "100%", backgroundColor: "black", height: "5px", marginBottom: "10px"}}>
															<div style={{width:"70%", height: "100%", backgroundColor: "white"}}></div>
														</div>
														<div className="adminHeaderDetailsTime">
															<div>Last Updated</div>
															<div>3rd April, 2017</div>
														</div>
													</div>
													<div className="col-md-3 adminHeaderDetailsCountParent">
														<div className="adminHeaderDetailsCountChild">7</div>
													</div>
												</div>
											</div>
											<div className="col-md-4 adminHeaderDetails">
												Hii
											</div>
											<div className="col-md-4 adminHeaderDetails">
												Hii
											</div>
										</div>
                  </div>
                </div>
                <div className="col-xs-2 col-md-2">
                  <div className="message-field">
                    <i className="fa fa-2x fa-envelope" aria-hidden="true" /><span className="badge badge-notify">1</span>
                  </div>
                </div>
              </div>

              <center className="row">
								<div className="col-md-1"></div>
                <div className="col-md-1 headerTabs headerTabActive">
                  <div className="headerTabContent">Name</div>
                </div>
								<div className="col-md-1 headerTabs">
                  <div className="headerTabContent">URLs</div>
                </div>
								<div className="col-md-1 headerTabs">
                  <div className="headerTabContent">3rd Party</div>
                </div>
								<div className="col-md-1 headerTabs">
                  <div className="headerTabContent">All</div>
                </div>

              </center>

            </div>
          </div>
          <div className="container" style={{marginTop: 60}}>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                  <div className="row">
                    <div className="col-xs-1 panel-title">
                      <a className="collapseButton" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <i className="more-less glyphicon glyphicon-plus" />
                      </a>
                    </div>
                    <div className="col-xs-1 panel-title" style={{padding: 0, textAlign: 'right'}}>
                      <a style={{padding: '15px 0px'}}><span className="count toggleHash"># 110</span></a>
                    </div>
                    <div className="col-xs-5 panel-title">
                      <a style={{padding: "10px 0px 0px 15px"}}><span className="heading">
                        <a style={{fontSize: "20px"}} href="http://www.guardianexample.com" target="_blank">www.guardianexample.com</a></span></a>
                      <div style={{paddingLeft: "15px"}}>BUSINESS UNIT: Dental</div>
                    </div>
                    <div className="col-xs-3 panel-title">
                      <a>
                        <div className="progress">
                          <div className="progress-bar progress-bar-green progress-bar-left" role="progressbar" style={{width: '24%'}}>
                          </div>
                          <div className="progress-bar progress-bar-green" role="progressbar" style={{width: '24%'}}>
                          </div>
                          <div className="progress-bar progress-bar-black" role="progressbar" style={{width: '24%'}}>
                          </div>
                          <div className="progress-bar progress-bar-cyan progress-bar-right" role="progressbar" style={{width: '24%'}}>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-xs-2 panel-title">
                      <a  style={{marginTop: "8px"}}>
                        04/21/17
                      </a>
                    </div>
                  </div>
                </div>
                <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-xs-1">
                      </div>
                      <div className="col-xs-1">
                        <i className="fa fa-bank" />
                      </div>
                      <div className="col-xs-1">
                        <i className="fa fa-calendar" />
                      </div>
                      <div className="col-xs-4">
                        <span><i className="fa fa-commenting-o" /><span style={{marginLeft: 8}}>HOW IT WILL BE USED</span></span>
                      </div>
                      <div className="col-xs-5">
                        <span><i className="fa fa-check-circle-o" /><span style={{marginLeft: 8}}>APPROVAL STATUS</span></span>
                      </div>
                    </div>
                    <div className="row" style={{marginTop: 8}}>
                      <div className="col-xs-1">
                      </div>
                      <div className="col-xs-1">
                        Dental
                      </div>
                      <div className="col-xs-1">
                        5-10 Years
                      </div>
                      <div className="col-xs-4">
                        <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</span>
                      </div>
                      <div className="col-xs-5">
                        {/*<div style="display:inline-block;width:100%;">
                                        <ul class="timeline timeline-horizontal">
                                            <li class="timeline-item col-xs-3">
                                                <div class="timeline-badge primary"><i class="glyphicon glyphicon-check"></i></div>
                                                <div class="timeline-panel" style="display:none">
                                                    <div class="timeline-heading">
                                                        <h4 class="timeline-title">Mussum ipsum cacilds 1</h4>
                                                        <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                                                    </div>
                                                    <div class="timeline-body">
                                                        <p>Mussum ipsum cacilds, vidis litro abertis. Consetis faiz elementum girarzis, nisi eros gostis.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="timeline-item col-xs-3">
                                                <div class="timeline-badge success"><i class="glyphicon glyphicon-check"></i></div>
                                                <div class="timeline-panel" style="display:none">
                                                    <div class="timeline-heading">
                                                        <h4 class="timeline-title">Mussum ipsum cacilds 2</h4>
                                                        <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                                                    </div>
                                                    <div class="timeline-body">
                                                        <p>Mussum ipsum cacilds, vidis faiz elementum girarzis, nisi eros gostis.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="timeline-item col-xs-3">
                                                <div class="timeline-badge info"><i class="glyphicon glyphicon-check"></i></div>
                                                <div class="timeline-panel" style="display:none">
                                                    <div class="timeline-heading">
                                                        <h4 class="timeline-title">Mussum ipsum cacilds 3</h4>
                                                        <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                                                    </div>
                                                    <div class="timeline-body">
                                                        <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipisci. Mé faiz elementum girarzis, nisi eros gostis.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="timeline-item col-xs-3">
                                                <div class="timeline-badge danger"><i class="glyphicon glyphicon-check"></i></div>
                                                <div class="timeline-panel" style="display:none">
                                                    <div class="timeline-heading">
                                                        <h4 class="timeline-title">Mussum ipsum cacilds 4</h4>
                                                        <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                                                    </div>
                                                    <div class="timeline-body">
                                                        <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.</p>
                                                    </div>
                                                </div>
                                            </li>


                                        </ul>
                                    </div>*/}
                        <div className="container-fluid">
                          <ul className="htimeline">
                            <li className="step col-xs-3 green">
                              <div className="timeicon textgreen">
                                <i className="fa fa-2x fa-cab" />
                              </div>
                              <div className="textcgreen">
                                <span>CORP COMMS</span>
                                <br />
                                <span>Rob</span>
                              </div>
                            </li>
                            <li className="step col-xs-3 green">
                              <div className="timeicon textgreen">
                                <i className="fa fa-2x fa-cab" />
                              </div>
                              <div className="textcgreen">
                                <span>LEGAL</span>
                                <br />
                                <span>Logan Gould</span>
                              </div>
                            </li>
                            <li className="step col-xs-3 cyan">
                              <div className="timeicon">
                                <i className="fa fa-2x fa-cab" />
                              </div>
                              <div className="textcblack">
                                <span>IT</span>
                                <br />
                                <span>Pending</span>
                              </div>
                            </li>
                            <li className="steplast col-xs-3 cyan">
                              <div className="timeicon textcyan">
                                <i className="fa fa-2x fa-cab" />
                              </div>
                              <div className="textccyan">
                                <span>COMPLIANCE</span>
                                <br />
                                <span>NA</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <div className="row">
                    <div className="col-xs-1 panel-title">
                      <a className="collapseButton" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="more-less glyphicon glyphicon-plus" />
                      </a>
                    </div>
                    <div className="col-xs-1 panel-title" style={{padding: 0, textAlign: 'right'}}>
                      <a style={{padding: '15px 0px'}}><span className="count toggleHash"># 112</span></a>
                    </div>
                    <div className="col-xs-5 panel-title">
                      <a style={{padding: "10px 0px 0px 15px"}}><span className="heading">
                        <a style={{fontSize: "20px"}} href="http://www.guardianexample.com" target="_blank">www.guardianexample.com</a></span></a>
                      <div style={{paddingLeft: "15px"}}>BUSINESS UNIT: Dental</div>
                    </div>
                    <div className="col-xs-3 panel-title">
                      <a>
                        <div className="progress">
                          <div className="progress-bar progress-bar-green progress-bar-left" role="progressbar" style={{width: '24%'}}>
                          </div>
                          <div className="progress-bar progress-bar-green" role="progressbar" style={{width: '24%'}}>
                          </div>
                          <div className="progress-bar progress-bar-black" role="progressbar" style={{width: '24%'}}>
                          </div>
                          <div className="progress-bar progress-bar-cyan progress-bar-right" role="progressbar" style={{width: '24%'}}>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-xs-2 panel-title">
                      <a style={{marginTop: "8px"}}>
                        04/21/17
                      </a>
                    </div>
                  </div>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-xs-1">
                      </div>
                      <div className="col-xs-1">
                        <i className="fa fa-bank" />
                      </div>
                      <div className="col-xs-1">
                        <i className="fa fa-calendar" />
                      </div>
                      <div className="col-xs-4">
                        <span><i className="fa fa-commenting-o" /><span style={{marginLeft: 8}}>HOW IT WILL BE USED</span></span>
                      </div>
                      <div className="col-xs-5">
                        <span><i className="fa fa-check-circle-o" /><span style={{marginLeft: 8}}>APPROVAL STATUS</span></span>
                      </div>
                    </div>
                    <div className="row" style={{marginTop: 8}}>
                      <div className="col-xs-1">
                      </div>
                      <div className="col-xs-1">
                        Dental
                      </div>
                      <div className="col-xs-1">
                        5-10 Years
                      </div>
                      <div className="col-xs-4">
                        <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</span>
                      </div>
                      <div className="col-xs-5">
                        <div className="container-fluid">
                          <ul className="htimeline">
                            <li className="step col-xs-3 green">
                              <div className="timeicon textgreen">
                                <i className="fa fa-2x fa-cab" />
                              </div>
                              <div className="textcgreen">
                                <span>CORP COMMS</span>
                                <br />
                                <span>Rob</span>
                              </div>
                            </li>
                            <li className="step col-xs-3 green">
                              <div className="timeicon textgreen">
                                <i className="fa fa-2x fa-cab" />
                              </div>
                              <div className="textcgreen">
                                <span>LEGAL</span>
                                <br />
                                <span>Logan Gould</span>
                              </div>
                            </li>
                            <li className="step col-xs-3 cyan">
                              <div className="timeicon">
                                <i className="fa fa-2x fa-cab" />
                              </div>
                              <div className="textcblack">
                                <span>IT</span>
                                <br />
                                <span>Pending</span>
                              </div>
                            </li>
                            <li className="steplast col-xs-3 cyan">
                              <div className="timeicon textcyan">
                                <i className="fa fa-2x fa-cab" />
                              </div>
                              <div className="textccyan">
                                <span>COMPLIANCE</span>
                                <br />
                                <span>NA</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                  <div className="row">
                    <div className="col-xs-1 panel-title">
                      <a className="collapseButton" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        <i className="more-less glyphicon glyphicon-plus" />
                      </a>
                    </div>
                    <div className="col-xs-1 panel-title" style={{padding: 0, textAlign: 'right'}}>
                      <a style={{padding: '15px 0px'}}><span className="count toggleHash"># 105</span></a>
                    </div>
                    <div className="col-xs-5 panel-title">
                      <a style={{padding: "10px 0px 0px 15px"}}><span className="heading">
                        <a style={{fontSize: "20px"}} href="http://www.guardianexample.com" target="_blank">www.guardianexample.com</a></span></a>
                      <div style={{paddingLeft: "15px"}}>BUSINESS UNIT: Dental</div>
                    </div>
                    <div className="col-xs-3 panel-title">
                      <a>
                        <div className="progress">
                          <div className="progress-bar progress-bar-black progress-bar-left" role="progressbar" style={{width: '24%'}}>
                          </div>
                          <div className="progress-bar progress-bar-cyan" role="progressbar" style={{width: '24%'}}>
                          </div>
                          <div className="progress-bar progress-bar-cyan" role="progressbar" style={{width: '24%'}}>
                          </div>
                          <div className="progress-bar progress-bar-cyan progress-bar-right" role="progressbar" style={{width: '24%'}}>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-xs-2 panel-title">
                      <a style={{marginTop: "8px"}}>
                        04/21/17
                      </a>
                    </div>
                  </div>
                </div>
                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-xs-1">
                      </div>
                      <div className="col-xs-1">
                        <i className="fa fa-bank" />
                      </div>
                      <div className="col-xs-1">
                        <i className="fa fa-calendar" />
                      </div>
                      <div className="col-xs-4">
                        <span><i className="fa fa-commenting-o" /><span style={{marginLeft: 8}}>HOW IT WILL BE USED</span></span>
                      </div>
                      <div className="col-xs-5">
                        <span><i className="fa fa-check-circle-o" /><span style={{marginLeft: 8}}>APPROVAL STATUS</span></span>
                      </div>
                    </div>
                    <div className="row" style={{marginTop: 8}}>
                      <div className="col-xs-1">
                      </div>
                      <div className="col-xs-1">
                        Dental
                      </div>
                      <div className="col-xs-1">
                        5-10 Years
                      </div>
                      <div className="col-xs-4">
                        <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</span>
                      </div>
                      <div className="col-xs-5">
                        <div className="container-fluid">
                          <ul className="htimeline">
                            <li className="step col-xs-3 cyan">
                              <div className="timeicon textblack">
                                <i className="fa fa-2x fa-cab" />
                              </div>
                              <div className="textcblack">
                                <span>CORP COMMS</span>
                                <br />
                                <span>Rob</span>
                              </div>
                            </li>
                            <li className="step col-xs-3 cyan">
                              <div className="timeicon textcyan">
                                <i className="fa fa-2x fa-cab" />
                              </div>
                              <div className="textccyan">
                                <span>LEGAL</span>
                                <br />
                                <span>Logan Gould</span>
                              </div>
                            </li>
                            <li className="step col-xs-3 cyan">
                              <div className="timeicon textcyan">
                                <i className="fa fa-2x fa-cab" />
                              </div>
                              <div className="textccyan">
                                <span>IT</span>
                                <br />
                                <span>Pending</span>
                              </div>
                            </li>
                            <li className="steplast col-xs-3 cyan">
                              <div className="timeicon textcyan">
                                <i className="fa fa-2x fa-cab" />
                              </div>
                              <div className="textccyan">
                                <span>COMPLIANCE</span>
                                <br />
                                <span>NA</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* panel-group */}
          </div>
        </div>
      </div>
    );
  }
}
Admin2.contextTypes = { history: PropTypes.history }

export default Admin2;
