import React from 'react';
import { Link,PropTypes} from 'react-router';
import Header from './Header';
import SubHeader from './SubHeader';

class Review extends React.Component {


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
                        <button className="btn btn-default dropdown-toggle" type="button" id="menu1" style={{width:'100%',backgroundColor: 'white',textAlign: 'left',height: '40px',outline: 0, marginTop: "-5px", border: "0px", color: "#308bc0", paddingLeft: "0px"}} data-toggle="dropdown">{this.state.requestValue}
                          <span style={{float:'right'}}><i className="fa fa-angle-down" aria-hidden="true" /></span></button>
                          <span style={{ fontSize: "12px", color: "#ccc"}}>A new Branding Name, Both a New URL(s) and Branding Name, 3rd party use of Guardian Name & logo</span>
                        <ul className="dropdown-menu requestDropdown" role="menu" aria-labelledby="menu1" style={{width: '100%',margin: '0px',letterSpacing: '0px'}}>
                          <li onClick={this.requestValue.bind(this,"A New URL(s)")}>A New URL(s)</li>
                          <li onClick={this.requestValue.bind(this,"A New Branding Name")}>A New Branding Name</li>
                          <li onClick={this.requestValue.bind(this,"Both a New URL(s) and Branding Name")}>Both a New URL(s) and Branding Name</li>
                          <li onClick={this.requestValue.bind(this,"3rd party use of Guardian Name & Logo")}>3rd party use of Guardian Name & Logo</li>
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
                          <div>
                            <p style={{fontWeight: "bold", margin: "0px"}}>Review</p>
                            <p style={{fontSize: "10px"}}>Check the details of your request</p>
                          </div>
                        <div>

                        <div style={{marginTop: "20px", fontSize: "10px", opacity: "0.5"}}>URL(s) REQUESTING</div>

                        <div className="row">
                          <a href="http://www.gaurdianexample.com" style={{fontSize: "20px", color: "rgb(48, 139, 192)"}} target="_blank" className="col-md-8">www.gaurdianexample.com</a>
                          <div className="col-md-4 pull-right">
                            <i  className="fa fa-calendar" /> 06/15/2017
                          </div>
                        </div>
                      </div>

                      <div className="row" style={{marginTop: "20px", textAlign: "center"}}>

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

                <div className="row">
                <div className="col-md-4 row text-center" style={{marginTop: '40px',marginBottom: '40px'}}>
                      <input type="button" onClick={this.redirectTo.bind(this, "request3")} className="btn nextButton"  style={{height: '45px', width:'50%'}} value="Back" />
                </div>
                <div className="col-md-4 row text-center" style={{marginTop: '40px',marginBottom: '40px'}}>
                      <input type="button" onClick={this.redirectTo.bind(this, "request")} className="btn nextButton btn-default"  style={{height: '45px', width:'50%', color: 'blue'}} value="Save as Draft" />
                </div>
                <div className="col-md-4 row text-center" style={{marginTop: '40px',marginBottom: '40px'}}>
                      <input type="button" onClick={this.redirectTo.bind(this, "submit")} className="btn nextButton btn-info"  style={{height: '45px', width:'50%'}} value="Submit" />
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
Review.contextTypes = { history: PropTypes.history }

export default Review;
