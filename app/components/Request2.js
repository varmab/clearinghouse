import React from 'react';
import { Link,PropTypes} from 'react-router';
import Header from './Header';
import SubHeader from './SubHeader';

class Request2 extends React.Component {


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

          <div className="mypage-header" style={{backgroundColor: "#092f5c", height: "215px"}}>
          <Header />
            <div className="container mypage-content">
              <div className="row">
              <SubHeader/>
              </div>
              <div className="well">
                <div className="row">
                  <div className="col-xs-6">
                    <div className="pull-left"><span>I am Requesting : </span></div>
                  </div>
                  <div className="col-xs-6">
                    <div className="pull-right">
                   <div className="dropdown">
                        <button className="btn btn-default dropdown-toggle" type="button" id="menu1" style={{width:'100%',backgroundColor: 'white',textAlign: 'left',height: '40px',outline: 0}} data-toggle="dropdown">{this.state.requestValue}
                          <span style={{float:'right'}}><i className="fa fa-angle-down" aria-hidden="true" /></span></button>
                        <ul className="dropdown-menu requestDropdown" role="menu" aria-labelledby="menu1" style={{width: '100%',margin: '0px',letterSpacing: '0px'}}>
                          <li onClick={this.requestValue.bind(this,"A New URL(s)")}>A New URL(s)</li>
                          <li onClick={this.requestValue.bind(this,"A New Branding Name")}>A New Branding Name</li>
                          <li onClick={this.requestValue.bind(this,"Both a New URL(s) and Branding Name")}>Both a New URL(s) and Branding Name</li>
                          <li onClick={this.requestValue.bind(this,"3rd party use of Guardian Name & Logo")}>3rd party use of Guardian Name & Logo</li>
                        </ul>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={{marginTop: 60}}>
                  <div className="row" style={{marginTop: '50px',marginBottom: '50px'}}>
                      <div className="col-md-2"></div>
                      <div className="col-md-8" style={{border: '1px solid #cccccc',borderRadius: '5px'}}>
                                  <div className="row">
                                  <div className="col-md-6">
                                    <input type="text" style={{width:'100%',height: '45px'}} className="form-control" id="usr" placeholder="Your Name"/>
                                  </div>
                                  <div className="col-md-6">
    
                                  <div className="form-group">
                                    <select className="form-control" id="sel1" style={{width:'100%',height: '45px'}}>
                                    <option></option>
                                    <option>accounting</option>
                                    <option>marketing</option>
                                    <option>production</option>
                                    </select>
                                  </div>

                                  </div>
                                  </div>
                                  <br/>
                                  <div className="row">
                                  <div className="col-md-6">
                                  <div className="form-group">
                                    <select className="form-control" id="sel1" style={{width:'100%',height: '45px'}}>
                                    <option></option>
                                    <option>Carl Johnson</option>
                                    <option>John Doe</option>
                                    <option>Mark Webber</option>
                                    </select>
                                  </div>

                                  </div>
                                  <div className="col-md-6">
                                  </div>
                                  </div>
                                  <br/>
                                  <div className="row">
                                  <div className="col-md-6">
                                  
                                  <div className="form-group">
                                    <select className="form-control" id="sel1" style={{width:'100%',height: '45px'}}>
                                    <option></option>
                                    <option>$0 - $20,000</option>
                                    <option>$20,000 - $40,000</option>
                                    <option>$40,000 - $60,000</option>
                                    </select>
                                  </div>

                                  </div>
                                  <br/>
                                  <div className="col-md-6">
                                    <input type="text" style={{width:'100%',height: '45px'}} className="form-control" id="usr" placeholder="Business area to be changed"/>
                                  </div>
                                  </div>
                                  <br/>
                                  <div className="row">
                                  <div className="col-md-6">
                                    <input type="date" style={{width:'100%',height: '45px'}} className="form-control" id="usr" placeholder="date"/>
                                  </div>
                                  <div className="col-md-6">
                                  <div className="form-group">
                                    <select className="form-control" id="sel1" style={{width:'100%',height: '45px'}}>
                                    <option></option>
                                    <option>0-5 years</option>
                                    <option>5-10 years</option>
                                    <option>10-15 years</option>
                                    </select>
                                  </div>

                                  </div>
                                  </div>

                <div className="row">
                <div className="col-md-6 row text-center" style={{marginTop: '40px',marginBottom: '40px'}}>
                      <input type="button" onClick={this.redirectTo.bind(this, "request")} className="btn nextButton btn-default"  style={{height: '45px', width:'50%'}} value="Back" disabled/>
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
