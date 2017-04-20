import React from 'react';
import { PropTypes } from 'react-router';

class Header extends React.Component {




  constructor(props)
    {
        super(props)
        this.state = {

        };
    }

    redirectTo(path) {
      this.context.history.pushState(null, '/'+path);
    }

   render() {


      return (
        <div className="headerSection">
          <div className="container">
            <div className="row">
              <div className="headerContent col-md-1 ">
                <div className="siteIcon menuButton pull-right"  onClick={this.redirectTo.bind(this, "")}></div>
              </div>
              <div className="headerContent col-md-2" style={{paddingLeft: "0px"}} >
                <span className="menuButton" onClick={this.redirectTo.bind(this, "")}>CLEARINGHOUSE</span>
              </div>
              <div className="headerContent col-md-6">
                <div className="row">
                  <div className="col-sm-4 col-md-2">
                    <span className="menuButton" onClick={this.redirectTo.bind(this, "training")}>Training</span>
                  </div>
                  <div className="col-sm-4 col-md-2">
                    <span className="menuButton" onClick={this.redirectTo.bind(this, "directory")}>Directory</span>
                  </div>
                  <div className="col-sm-4 col-md-4 ">
                    <span className="menuButton" onClick={this.redirectTo.bind(this, "request")}>Request Library</span>
                  </div>
                  <div className="hidden-sm col-md-4"></div>
                </div>
              </div>
              <div className="headerContent col-md-3">
                <div className="col-md-6">
                  <div>
                    <span className="underline menuButton" onClick={this.redirectTo.bind(this, "signin")}>Sign In</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <span className="underline menuButton" onClick={this.redirectTo.bind(this, "register")}>Register</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
		  	</div>
      );
   }
}

Header.contextTypes = { history: PropTypes.history }
export default Header;
