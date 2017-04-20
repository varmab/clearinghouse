import React from 'react';
import { Link,PropTypes} from 'react-router';
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
      <div className="row" style={{letterSpacing: '1px'}}>
           <SubHeader/>
				      <div className="row text-center" style={{padding: '20px 0px 5px 0px'}}>
                   <h2>I'm Requesting:</h2>
              </div>

              {/* Request dropdown */}
              <div className="row">
                   <div className="col-md-4"></div>
                   <div className="col-md-4" style={{padding: '0px 75px'}}>
                   <div className="dropdown">
                        <button className="btn btn-default dropdown-toggle" type="button" id="menu1" style={{width:'100%',backgroundColor: 'white',textAlign: 'left',height: '40px',outline: 0}} data-toggle="dropdown">{this.state.requestValue}
                          <span style={{float:'right'}}><i className="fa fa-angle-down" aria-hidden="true" /></span></button>
                        <ul className="dropdown-menu requestDropdown" role="menu" aria-labelledby="menu1" style={{width: '100%',margin: '0px',letterSpacing: '0px'}}>
                          <li onClick={this.requestValue.bind(this,"A New Branding Name")}>A New Branding Name</li>
                          <li onClick={this.requestValue.bind(this,"Both a New URL(s) and Branding Name")}>Both a New URL(s) and Branding Name</li>
                          <li onClick={this.requestValue.bind(this,"3rd party use of Guardian Name & Logo")}>3rd party use of Guardian Name & Logo</li>
                        </ul>
                     </div>
                   </div>
                   <div className="col-md-4"></div>
              </div>

                {/* Search box */}
              <div className="row" style={{marginTop: '120px',marginBottom: '50px'}}>
                      <div className="col-md-2"></div>
                      <div className="col-md-8" style={{border: '1px solid #cccccc',borderRadius: '5px'}}>
                      <div className="row text-center" style={{borderBottom: '1px solid #cccccc',padding: '10px 0px'}}>
                            <h3>Search for your URL(s)</h3>
                      </div>
                      <div className="row">
                          <div className="col-md-2"></div>
                          <div className="col-md-8">
                                  <div className="row" style={{margin: '30px 0px 20px 0px'}}>
                                         <h4>Enter your URL(s) to perform a Google search:</h4>
                                  </div>
                                  <div className="row">
                                        <div className="col-md-8">
                                                <input type="text" style={{width:'100%',height: '45px'}} className="form-control" id="usr" />
                                        </div>
                                        <div className="col-md-4">
                                             	<input type="button" className="btn nextButton"  style={{width: '100%',height: '45px'}} value="Search" />
                                        </div>
                                  </div>
                                  <div className="row" style={{ margin: '25px 0px',border: '1px solid #cccccc'}}>
                                        <img className="img-responsive" src="img/search_img.png"/>
                                  </div>
                                  <div className="row" style={{margin: '30px 0px 10px 0px'}}>
                                         <h4>Similar URLs Guardian owns:</h4>
                                  </div>

                          </div>
                          <div className="col-md-2"></div>
                      </div>
                      <div className="row" style={{borderTop: '1px solid #cccccc',padding: '30px 0px'}}>
                              <div className="col-md-2"></div>
                              <div className="col-md-8">
                                         <div className="row" style={{paddingBottom: '10px',borderBottom: '1px solid #cccccc'}}>
                                              <div className="col-md-6"><span style={{fontSize: '17px'}} className="glyphicon glyphicon-ok homeCheck" aria-hidden="true"></span> Avesis.com</div>
                                              <div className="col-md-6"><a href="http://Avesis.com" target="_blank" style={{color: 'black',textDecoration: '1px solid black',textDecoration: 'underline',float:'right'}}>Learn more</a></div>
                                         </div>
                                         <div className="row" style={{padding: '15px 0px'}}>
                                              <div className="col-md-6"><span style={{fontSize: '17px'}} className="glyphicon glyphicon-ok homeCheck" aria-hidden="true"></span> GuardianAvesis.com</div>
                                              <div className="col-md-6"><a href="http://GuardianAvesis.com" target="_blank" style={{color: 'black',textDecoration: '1px solid black',textDecoration: 'underline',float:'right'}}>Learn more</a></div>
                                         </div>
                              </div>
                              <div className="col-md-2"></div>
                      </div>
                      </div>
                      <div className="col-md-2"></div>
              </div>
              <div className="row text-center" style={{marginBottom: '80px'}}>
                      <input type="button" onClick={this.redirectTo.bind(this, "details")} className="btn nextButton"  style={{height: '45px'}} value="Next: Request Details" />
              </div>


      </div>
    );
  }
}
Request.contextTypes = { history: PropTypes.history }

export default Request;
