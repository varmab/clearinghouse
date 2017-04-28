import React from 'react';
import { Link,PropTypes} from 'react-router';
import Header from './Header';

class AdminApproval extends React.Component {


  constructor(props) {
        super(props)
        this.state = {
              requestValue:"A New URLS(s)"
        };
    }

  componentWillMount() {
           window.scrollTo(0, 0);
  }


  componentDidMount() {

  }

  redirectTo(path) {
    this.context.history.pushState(null, '/'+path);
  }


  requestValue(value){
         this.setState({requestValue:value});
  }


  render() {
    return (
       <div>

        <div id="main" className="page-content">

          <div className="mypage-header" style={{backgroundColor: "#D4AF37", height: "215px"}}>
          <Header />
            <div className="container mypage-content">
              <div className="row">
                   <div className="col-xs-1 panel-title">
                      <a className="collapseButton" role="button" onClick={this.redirectTo.bind(this, "admin2")}>
                        <i className="more-less glyphicon glyphicon-chevron-left" />
                      </a>
                    </div>
                    <div className="col-xs-1 panel-title" style={{padding: 0, textAlign: 'right'}}>
                      <a style={{padding: '15px 0px'}}><span className="count toggleHash"># 105</span></a>
                    </div>
                    <div className="col-xs-5 panel-title">
                      <a style={{padding: "10px 0px 0px 15px"}}><span className="heading">
                        <a style={{fontSize: "20px"}} href="http://www.guardianexample.com" target="_blank">www.guardianexample.com</a></span></a>
                      <div style={{paddingLeft: "15px", fontSize: 'smaller'}}>REQUESTED BY: John Deer</div>
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
              <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-5">
              <div className="well" data-toggle="collapse" data-target="#toggleDetailsDiv" style={{ padding: "15px", width: "450px", cursor: "pointer"}}>

                    <div>
                      <div style={{marginTop: "10px", fontSize: "17px", fontWeight: "bold"}}>Activity
                      </div>
                      <div>Last update on 10/04/2017</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{marginTop: "20px"}}>
                  <div className="row" style={{marginTop: '20px',marginBottom: '50px'}}>
                      <div className="col-md-1"></div>
                      <div className="col-md-6">
                    <div className="col-xs-2" style={{padding: "0px"}}>
                        <div style={{borderRight: "1px solid #ccc"}}>
                          <i style={{fontSize: "50px", color: "rgb(48, 139, 192)"}} className="fa fa-bank" />
                        </div>
                        <div style={{marginTop: "10px"}}>Dental</div>
                      </div>
                      <div className="col-xs-2" style={{padding: "0px"}}>
                        <div style={{borderRight: "1px solid #ccc"}}>
                          <i style={{fontSize: "50px", color: "rgb(48, 139, 192)"}} className="fa fa-calendar" />
                        </div>
                        <div style={{marginTop: "10px"}}>5 - 10 years</div>
                      </div>
                      <div className="col-xs-8" style={{padding: "0px"}}>
                        <div className="row">
                          <div className="col-md-3" >
                            <i style={{fontSize: "50px", color: "rgb(48, 139, 192)"}} className="fa fa-commenting-o" />
                          </div>
                          <div className="col-md-2" style={{ padding: "0px", textAlign: "left", marginTop: "15px", fontSize: "9px", color: "rgb(48, 139, 192)" }}>HOW IT WILL BE USED:</div>
                        </div>
                        <div style={{marginTop: "10px", textAlign: "left"}}>The easiest way to get started with React is to use this Hello World example code on CodePen. You don't need to install anything; you can just open it in another tab and follow along as we go through examples. If you'd rather use a local development environment, check out the Installation page.</div>
                      </div>
                      </div>
                      <div className="col-md-5" >
                      <div className="collapse" id="toggleDetailsDiv" style={{ marginTop: "-40px", border: "1px solid #f5f5f5", marginRight: "7px", padding: "10px"}}>
                          <div className="row" style={{marginTop: "20px"}}>

                            <div className="col-md-3" style={{height: "100px", borderRight: "1px solid green", paddingTop: "42px", paddingLeft: "25px"}}>
                              07/15/17
                            </div>
                            <div className="col-md-9">
                              <div className="row" style={{marginLeft: "-20px", marginTop: "-5px"}}>
                                <div className="timeText greenElement col-md-2" >1</div>
                                <div className="col-md-10" style={{fontSize: "9px", color: "green", paddingTop: "7px"}}>CORP COMMS</div>
                              </div>
                              <div className="row" style={{marginTop: "20px"}}>
                                <div className="col-md-9">
                                  <div className="textCircle col-md-2">JD</div>
                                  <div className="col-md-10">
                                    <span style={{fontSize: "10px", marginRight: "2px"}}>Approved by</span>
                                    <span>Jane Doe</span><br/>
                                    <span style={{fontSize: "10px"}}>No Comments</span>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <span className="glyphicon glyphicon-ok-sign" style={{fontSize: "30px", color: "green"}} aria-hidden="true"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">

                            <div className="col-md-3" style={{height: "100px", borderRight: "1px solid green", paddingTop: "42px", paddingLeft: "25px"}}>
                              07/15/17
                            </div>
                            <div className="col-md-9">
                              <div className="row" style={{marginLeft: "-20px", marginTop: "-5px"}}>
                                <div className="timeText greenElement col-md-2" >2</div>
                                <div className="col-md-1" style={{fontSize: "9px", color: "green", paddingTop: "7px"}}>LEGAL</div>
                                <hr style={{marginTop: "13px", width: "250px"}} />
                              </div>
                              <div className="row" style={{marginTop: "20px"}}>
                                <div className="col-md-9">
                                  <div className="textCircle col-md-2">LG</div>
                                  <div className="col-md-10">
                                    <span style={{fontSize: "10px", marginRight: "2px"}}>Approved by</span>
                                    <span>Logan G</span><br/>
                                    <span style={{fontSize: "10px"}}>No Comments</span>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <span className="glyphicon glyphicon-ok-sign" style={{fontSize: "30px", color: "green"}} aria-hidden="true"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">

                            <div className="col-md-3" style={{height: "100px", borderRight: "1px solid green", paddingTop: "42px", paddingLeft: "25px"}}>
                              07/15/17
                            </div>
                            <div className="col-md-9">
                              <div className="row" style={{marginLeft: "-20px", marginTop: "-5px"}}>
                                <div className="timeText greenElement col-md-2" >3</div>
                                <div className="col-md-1" style={{fontSize: "9px", color: "green", paddingTop: "7px"}}>IT</div>
                                <hr style={{marginTop: "13px", width: "250px"}} />
                              </div>
                              <div className="row" style={{marginTop: "20px"}}>
                                <div className="col-md-9">
                                  <div className="textCircle col-md-2">JD</div>
                                  <div className="col-md-10">
                                    <span style={{fontSize: "10px", marginRight: "2px", color: "red"}}>Approved pending</span>
                                    <span>John Deer</span><br/>
                                    <span style={{fontSize: "10px"}}>No Comments</span>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <span className="glyphicon glyphicon-ok-sign" style={{fontSize: "30px", color: "green"}} aria-hidden="true"></span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row" style={{backgroundColor: "#f5f5f5"}}>
                            <textarea style={{resize: "none", margin: "20px", width: "90%"}} rows="5" > </textarea>
                            <div className="pull-right" style={{marginRight: "20px"}}>
                              <a>View Details</a>
                              <div style={{marginBottom: "10px"}}>
                                <input className="btn" style={{marginRight: "20px"}} type="button" value="Reject" />
                                <input className="btn btn-primary" type="button" value="Approve" />
                              </div>
                            </div>
                          </div>


                      </div>
                      </div>
                    </div>



          </div>
        </div>
      </div>
    );
  }
}
AdminApproval.contextTypes = { history: PropTypes.history }

export default AdminApproval;
