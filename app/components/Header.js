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
       <div>
          <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
          <div id="main">
            {/*<h2>Sidenav Push Example</h2>
          <p>Click on the element below to open the side navigation menu, and push this content to the right. Notice that we add a black see-through background-color to body when the sidenav is opened.</p>
          <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>*/}

              <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand headerContentPadding" href="#">Guardian</a>
                  </div>
                  <ul className="nav navbar-nav">
                    <li><a className="headerContentPadding" href="#">DASHBOARD</a></li>
                    {/*<li class="dropdown">
                              <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
                              <ul class="dropdown-menu">
                                  <li><a href="#">Page 1-1</a></li>
                                  <li><a href="#">Page 1-2</a></li>
                                  <li><a href="#">Page 1-3</a></li>
                              </ul>
                          </li>
                          <li><a href="#">Page 2</a></li>*/}
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li><a className="headerContentPadding" href="#">Wes Warren</a></li>
                    <li><a style={{paddingTop: "5px"}} href="#"><img src="./images/profile.jpeg" width={30} height={30} className="img img-circle" /></a></li>
                    <li>
                      <a href="#" style={{paddingTop: "5px"}} className="navbar-toggle" onclick="openNav()">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
      );
   }
}

Header.contextTypes = { history: PropTypes.history }
export default Header;
