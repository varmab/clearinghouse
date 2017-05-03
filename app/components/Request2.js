import React from 'react';
import { Link,PropTypes} from 'react-router';
import Header from './Header';
import SubHeader from './SubHeader';

class Request2 extends React.Component {


  constructor(props) {
        super(props)
        this.state = {
              requestValue: "A New URL (one submission per URL)",
              businessUnit: "Select Business Unit",
              manager: "Select Manager",
              budget: "Select Budget",
              lifeSpan: "Select Life Span",
              thirdParty: false
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


  handleChange(type, value, e) {
    var change = {};
    change[type] = value;

    this.setState(change)

    if(type == "requestValue") {
      if(value == "3rd PARTY USE of Guardian Name & Logo") {
        this.setState({thirdParty: true});
      }
      else {
        this.setState({thirdParty: false});
      }
    }

  }


  render() {
    return (
       <div>

        <div id="main" className="page-content">

          <div className="mypage-header" style={{backgroundColor: "#002C5F", height: "215px"}}>
          <Header />
            <div className="container mypage-content">
              <div className="row">
              <SubHeader/>
              </div>
              <div className="well" style={{backgroundColor: "white", height: "90px", marginTop: "35px"}}>
                <div className="row">
                  <div className="col-md-3">
                    <div className="pull-right"><div style={{marginTop: "10px", fontSize: "17px", fontWeight: "bold"}}>I'm Requesting</div></div>
                  </div>
                  <div className="col-md-8">

                   <div className="dropdown nullShadow form-control">
                        <button className="btn btn-default dropdown-toggle" type="button" id="menu1" style={{width:'100%',backgroundColor: 'white',textAlign: 'left',height: '40px',outline: 0, marginTop: "-5px", border: "0px", color: "#308bc0", paddingLeft: "0px"}} data-toggle="dropdown" >{this.state.requestValue}
                          <span style={{float:'right'}}><i className="fa fa-angle-down" aria-hidden="true" /></span></button>
                          <span style={{ fontSize: "12px", color: "#ccc"}}>A new Branding Name, 3rd PARTY USE of Guardian Name & logo</span>
                        <ul className="dropdown-menu requestDropdown" role="menu" aria-labelledby="menu1" style={{width: '100%',margin: '0px',letterSpacing: '0px'}}>
                          <li onClick={this.handleChange.bind(this, "requestValue", "A New URL (one submission per URL)")}>A New URL (one submission per URL)</li>
                          <li onClick={this.handleChange.bind(this, "requestValue", "A New Branding Name")}>A New Branding Name</li>
                          <li onClick={this.handleChange.bind(this, "requestValue", "3rd PARTY USE of Guardian Name & Logo")}>3rd PARTY USE of Guardian Name & Logo</li>
                        </ul>
                    </div>

                  </div>
                  <div className="col-md-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={{marginTop: 60}}>
                  <div className="row" style={{marginTop: '50px',marginBottom: '50px'}}>
                      <div className="col-md-2"></div>
                      <div className="col-md-8">

                          {
                            (this.state.thirdParty)?
                            (
                              <div className="row">
                                <div style={{color: "red", marginBottom: "20px"}}>For 3rd Party Use Requests, please only complete Numbers x, x, x, x</div>
                              </div>
                            ):(null)
                          }

                                  <div className="row">
                                  <div className="col-md-6">
                                  <span style={{ fontSize: "12px", color: "#ccc"}}>1) Your Name</span>
                                    <input type="text" style={{width:'100%',height: '45px'}} className="form-control nullShadow" id="name" placeholder="Type your Name"/>
                                  </div>
                                  <div className="col-md-6">
                                  <span style={{ fontSize: "12px", color: "#ccc"}}>2) Your Email</span>
                                    <input type="text" style={{width:'100%',height: '45px'}} className="form-control nullShadow" id="email" placeholder="Type your email"/>
                                  </div>
                                  </div>
                                  <br/>


                                  <div className="row">
                                  <div className="col-md-6">
                      <span style={{ fontSize: "12px", color: "#ccc"}}>3) Business Unit</span>
                   <div className="dropdown nullShadow form-control">

                        <button className="btn btn-default dropdown-toggle" type="button" id="menu2" style={{width:'100%',backgroundColor: 'white',textAlign: 'left',height: '40px',outline: 0, marginTop: "-5px", border: "0px", color: "#308bc0", paddingLeft: "0px"}} data-toggle="dropdown">{this.state.businessUnit}
                          <span style={{float:'right'}}><i className="fa fa-angle-down" aria-hidden="true" /></span></button>

                        <ul className="dropdown-menu requestDropdown" role="menu" aria-labelledby="menu2" style={{width: '100%',margin: '0px',letterSpacing: '0px'}}>
                          <li onClick={this.handleChange.bind(this, "businessUnit", "Group")}>Group</li>
                          <li onClick={this.handleChange.bind(this, "businessUnit", "Individual Markets")}>Individual Markets</li>
                          <li onClick={this.handleChange.bind(this, "businessUnit", "Dental")}>Dental</li>
                          <li onClick={this.handleChange.bind(this, "businessUnit", "Vision")}>Vision</li>
                          <li onClick={this.handleChange.bind(this, "businessUnit", "Park Avenue Securities")}>Park Avenue Securities</li>
                        </ul>
                     </div>

                                  </div>

                                  <div className="col-md-6">
                                    <span style={{ fontSize: "12px", color: "#ccc"}}>Business Unit</span>
                                    <input type="text" style={{width:'100%',height: '45px'}} className="form-control nullShadow" id="usr" placeholder="Type Your Business Unit"/>
                                  </div>
                                  </div>
                                  <br/>

                                  <div className="row">
                                  <div className="col-md-6">
                                  <span style={{ fontSize: "12px", color: "#ccc"}}>4) Your Manager</span>
                                    <input type="text" style={{width:'100%',height: '45px'}} className="form-control nullShadow" id="usr" placeholder="Type Your Manager"/>
                                  </div>
                                  <div className="col-md-6">
                                  </div>
                                  </div>
                                  <br/>
                                  <div className="row">
                                  <div className="col-md-6">
                      <span style={{ fontSize: "12px", color: "#ccc"}}>5) Budget</span>
                   <div className="dropdown nullShadow form-control">

                        <button className="btn btn-default dropdown-toggle" type="button" id="menu2" style={{width:'100%',backgroundColor: 'white',textAlign: 'left',height: '40px',outline: 0, marginTop: "-5px", border: "0px", color: "#308bc0", paddingLeft: "0px"}} data-toggle="dropdown">{this.state.budget}
                          <span style={{float:'right'}}><i className="fa fa-angle-down" aria-hidden="true" /></span></button>

                        <ul className="dropdown-menu requestDropdown" role="menu" aria-labelledby="menu2" style={{width: '100%',margin: '0px',letterSpacing: '0px'}}>
                          <li onClick={this.handleChange.bind(this, "budget", "$0 - $20,000")}>$0 - $20,000</li>
                          <li onClick={this.handleChange.bind(this, "budget", "$20,000 - $40,000")}>$20,000 - $40,000</li>
                          <li onClick={this.handleChange.bind(this, "budget", "$40,000 - $60,000")}>$40,000 - $60,000</li>
                        </ul>
                     </div>

                                  </div>

                                  <div className="col-md-6">
                                    <span style={{ fontSize: "12px", color: "#ccc"}}>6) Where is the home for this content?</span>
                                    <input type="text" style={{width:'100%',height: '45px'}} className="form-control nullShadow" id="usr"/>
                                  </div>
                                  </div>
                                  <br/>
                                  <div className="row">
                                  <div className="col-md-6">
                                  <span style={{ fontSize: "12px", color: "#ccc"}}>7) When does it need to be go live/in market by?</span>
                                    <input type="date" style={{width:'100%',height: '45px'}} className="form-control nullShadow" id="usr" placeholder="date"/>
                                  </div>
                                  <div className="col-md-6">
                    <span style={{ fontSize: "12px", color: "#ccc"}}>8) What is the life span of this new branding name/URL(s)?</span>
                   <div className="dropdown nullShadow form-control">
                        <button className="btn btn-default dropdown-toggle" type="button" id="menu2" style={{width:'100%',backgroundColor: 'white',textAlign: 'left',height: '40px',outline: 0, marginTop: "-5px", border: "0px", color: "#308bc0", paddingLeft: "0px"}} data-toggle="dropdown">{this.state.lifeSpan}
                          <span style={{float:'right'}}><i className="fa fa-angle-down" aria-hidden="true" /></span></button>
                        <ul className="dropdown-menu requestDropdown" role="menu" aria-labelledby="menu2" style={{width: '100%',margin: '0px',letterSpacing: '0px'}}>
                          <li onClick={this.handleChange.bind(this, "lifeSpan", "0 - 5 years")}>0 - 5 years</li>
                          <li onClick={this.handleChange.bind(this, "lifeSpan", "5 - 10 years")}>5 - 10 years</li>
                          <li onClick={this.handleChange.bind(this, "lifeSpan", "10 - 15 years")}>10 - 15 years</li>
                        </ul>
                     </div>

                                  </div>
                                  </div>
                                  <br/>

              {
                (this.state.thirdParty)?
                (
                  <div className="row">
                    <div className="col-md-6">
                    <span style={{ fontSize: "12px", color: "#ccc"}}>9) Name of 3rd Party Requester</span>
                      <input type="text" style={{width:'100%',height: '45px'}} className="form-control nullShadow" id="usr" placeholder="Name of 3rd Party Requester"/>
                    </div>
                    <div className="col-md-6">
                    <span style={{ fontSize: "12px", color: "#ccc"}}>10) Type Relationship of 3rd Party Requester</span>
                      <input type="text" style={{width:'100%',height: '45px'}} className="form-control nullShadow" id="usr" placeholder="Type Relationship of 3rd Party Requester"/>
                    </div>
                  </div>
                ):(null)
              }



                <div className="row">
                <div className="col-md-6 row text-center" style={{marginTop: '40px',marginBottom: '40px'}}>
                      <input type="button" onClick={this.redirectTo.bind(this, "home1")} className="btn nextButton btn-default"  style={{height: '45px', width:'50%'}} value="Back" disabled/>
                </div>
                <div className="col-md-6 row text-center" style={{marginTop: '40px',marginBottom: '40px'}}>
                      <input type="button" onClick={this.redirectTo.bind(this, "request3")} className="btn nextButton btn-info"  style={{height: '45px', width:'50%'}} value="Next" />
                </div>
                </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>

          </div>
        </div>
      </div>
    );
  }
}
Request2.contextTypes = { history: PropTypes.history }

export default Request2;
