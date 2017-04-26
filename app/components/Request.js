import React from 'react';
import { Link,PropTypes} from 'react-router';
import Header from './Header';
import SubHeader from './SubHeader';

class Request extends React.Component {


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
                      <div className="row">
                          <div className="col-md-2"></div>
                          <div className="col-md-8">
													<div className="input-group">
														<input type="text" className="form-control nullShadow" placeholder="Enter your URL(s) to perform a Google Search" aria-describedby="basic-addon2" />
														<span className="input-group-addon nullShadow" id="basic-addon2">
															<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
														</span>
													</div>

                                  <div className="row" style={{ margin: '25px 0px',border: '1px solid #cccccc'}}>
                                        <img className="img-responsive" src="img/search_img.png"/>
                                  </div>


                          </div>
                          <div className="col-md-2"></div>
                      </div>
                      <div className="row" style={{padding: '30px 0px'}}>
                              <div className="col-md-2"></div>
                              <div className="col-md-8">
                                         <div className="row" style={{paddingTop: "10px", backgroundColor: "rgb(204, 204, 204)", paddingBottom: "10px", marginBottom: "20px"}}>
                                              <div className="col-md-6"><span style={{fontSize: '17px', color: "black"}} className="glyphicon glyphicon-ok homeCheck" aria-hidden="true"></span> Avesis.com</div>
                                              <div className="col-md-6"><a href="http://Avesis.com" target="_blank" style={{textDecoration: 'underline',float:'right'}}>Learn more</a></div>
                                         </div>
                                         <div className="row" style={{paddingTop: "10px", backgroundColor: "rgb(204, 204, 204)", paddingBottom: "10px"}}>
                                              <div className="col-md-6"><span style={{fontSize: '17px', color: "black"}} className="glyphicon glyphicon-ok homeCheck" aria-hidden="true"></span> GuardianAvesis.com</div>
                                              <div className="col-md-6"><a href="http://GuardianAvesis.com" target="_blank" style={{textDecoration: 'underline',float:'right'}}>Learn more</a></div>
                                         </div>
                              </div>
                              <div className="col-md-2"></div>
                          </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                <div className="row text-center" style={{marginBottom: '80px'}}>
                      <input type="button" onClick={this.redirectTo.bind(this, "request2")} className="btn nextButton btn-info"  style={{height: '45px'}} value="Next: Request Details"/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
Request.contextTypes = { history: PropTypes.history }

export default Request;
