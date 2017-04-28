import React from 'react';
import { Link,PropTypes} from 'react-router';
import Header from './Header';
import SubHeader from './SubHeader';

class Submit extends React.Component {


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
                      <div className="col-md-8" style={{border: '1px solid #cccccc',borderRadius: '5px'}}>
                      <center>
                      <div>
                      <img src="./images/success.png" style={{verticalAlign: 'middle', opacity: 1}}/>
                        <p style={{fontSize: 'x-large', color: 'blue'}}> Request Submitted</p>
                        <b> Your Request is #36543</b>
                      </div>
                  <div className="row text-center" style={{marginTop: '40px',marginBottom: '40px'}}>
                      <input type="button" onClick={this.redirectTo.bind(this, "home1")} className="btn nextButton btn-info"  style={{height: '45px', width:'50%'}} value="Go To Dashboard" />
                  </div>
                      </center>                                                                                             
                      </div>
                      <div className="col-md-2"></div>
                    </div>

          </div> 
        </div>
      </div>
    );
  }
}
Submit.contextTypes = { history: PropTypes.history }

export default Submit;
