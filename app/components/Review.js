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
                      <div>
                      <p>Review</p>
                      <p>Check the details of your request</p> 
                      </div>

                      <div>
                      URL(s) REQUESTING
                      <p>www.gaurdianexample.com</p>
                      <i className="fa fa-calendar" /> 06/15/2017
                      </div>

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
