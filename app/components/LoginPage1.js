import React from 'react';
import { Link,PropTypes} from 'react-router';
import Header from './Header';

class LoginPage1 extends React.Component {


	constructor(props) {
        super(props)
        this.state = {

        };
    }

	componentWillMount() {

	}


  componentDidMount() {
		$(".homeCheckDiv").click(function() {
		  $(this).find(".homeCheck").toggleClass("homeDivChecked")
		});
  }

	redirectTo(path) {
		this.context.history.pushState(null, '/'+path);
	}


  render() {
    return (
               <div>
                 <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Sign in to your account</h4>
        </div>
        <div className="modal-body">
            <form>
                <div className="form-group">
                    <input type="email" className="form-control nullShadow" id="userid" placeholder="Email id"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control nullShadow" id="pwd" placeholder="Password"/>

                    </div>
                    <br/>
                   <div className="align-center">
                <button type="submit" className="btn btn-default form-control" id="login" style={{backgroundColor: "#328ABD", color: "white"}}>Login</button>
								<div className="row" style={{marginTop: "10px"}}>
									<div className="col-md-6">Forgot Password ?</div>
									<div className="col-md-6" style={{paddingLeft: "78px"}}>Sign Up</div>
								</div>
                    </div>
            </form>
        </div>

      </div>
    </div>
  </div>
          <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
          <div id="main" className="mypage-header" style={{backgroundColor: "#002C5F", height: "400px"}}>

            {/*<h2>Sidenav Push Example</h2>
          <p>Click on the element below to open the side navigation menu, and push this content to the right. Notice that we add a black see-through background-color to body when the sidenav is opened.</p>
          <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>*/}

              <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand headerContentPadding" href="#">Guardian</a>
                  </div>
                  <ul className="nav navbar-nav">
                    <li><a className="headerContentPadding" href="#">CLEARINGHOUSE</a></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li><a className="headerContentPadding" data-toggle="modal" data-target="#myModal" style={{cursor: 'pointer'}}>Login</a></li>
                    <li><a className="headerContentPadding" href="#">Register</a></li>
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
							<center>
								<div style={{color: "white", marginTop: "110px"}}>
									<div style={{fontSize: "28px"}}>
										LOREM IPSUM DOLOR SIT AMET
									</div>
									<div>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
									</div>
									<div>
										eiusmod tempor.
									</div>
									<div className="input-group" style={{width: "150px", marginTop: "20px"}}>
									  <span className="input-group-addon" id="basic-addon1" style={{ borderColor: "rgb(50, 138, 189)", backgroundColor: "rgb(50, 138, 189)", color: "white" }}>
											<span className="glyphicon glyphicon-play-circle" aria-hidden="true"></span>
										</span>
									  <label style={{ borderColor: "rgb(50, 138, 189)", backgroundColor: "rgb(50, 138, 189)", color: "white" }} className="form-control" aria-describedby="basic-addon1">Know more</label>
									</div>
								</div>
							</center>

            </div>
<div className="container-fluid">
            <div className="row" style={{backgroundColor: "white", height: "215px"}}>
                <center>
                <p className="homeTitle" style={{marginTop: "10px"}}>The Process</p>
                <p>It is a long established fact that a reader will be distracted</p>

                <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                <div className="row">
                <div className="col-md-4" style={{padding: "0px"}}>
                        <div>
                          <i style={{fontSize: "50px", color: "rgb(48, 139, 192)"}} className="fa fa-hourglass-start" />
                        </div>
                        <div style={{marginTop: "10px"}}>Raise a request</div>

                </div>
                <div className="col-md-4">
                        <div>
                          <i style={{fontSize: "50px", color: "rgb(48, 139, 192)"}} className="fa fa-thumbs-o-up" />
                        </div>
                        <div style={{marginTop: "10px"}}>Approval</div>
                </div>
                <div className="col-md-4">
                        <div>
                          <i style={{fontSize: "50px", color: "rgb(48, 139, 192)"}} className="fa fa-newspaper-o" />
                        </div>
                        <div style={{marginTop: "10px"}}>Publish</div>
                </div>
                </div>
                </div>
                <div className="col-md-2">
                </div>
                </div>
                </center>
            </div>

        <div className="row">
            <div className="col-md-6" style={{backgroundColor: "#C1A236", height: "250px", color:"white"}}>

                <center><p className="homeTitle" style={{marginTop: "20px"}}>The Guidelines</p></center>
                <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-9 pull-left">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>

                </div>

                </div>


            </div>
            <div className="col-md-6" style={{backgroundColor: "#002550", height: "250px",color:"white"}}>
                <center><p className="homeTitle" style={{marginTop: "20px"}}>Do's and Dont's</p></center>
                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-9 pull-left">
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
                <p style={{marginRight: "50px"}}>
									<span className="glyphicon glyphicon-ok-circle" aria-hidden="true" style={{marginRight: "10px"}}></span>
									It is a long established fact that a reader will be distracted
								</p>
                <p>
									<span className="glyphicon glyphicon-remove-circle" aria-hidden="true" style={{marginRight: "10px"}}></span>
									By the readable content of a page when looking at its layout.
								</p>
                <p>
									<span className="glyphicon glyphicon-ok-circle" aria-hidden="true" style={{marginRight: "10px"}}></span>
									By the readable content of a page when looking at its layout.
								</p>
                </div>
                <div className="col-md-2">
                </div>
                </div>


            </div>
        </div>

        <div className="row" style={{backgroundColor: "white", height: "215px"}}>
                    <div className="">
                    <center>
                        <div className="homeTitle" style={{marginTop: "10px"}}>Before Advancing</div>
                        <div style={{marginTop: "05px"}}>Check that you have completed the following:</div>
                    </center>
                    </div>
            <div className="row" style={{marginTop: "20px"}}>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-addon homeCheckDiv" id="basic-addon1">
                                    <span className="glyphicon glyphicon-ok homeCheck" aria-hidden="true"></span>
                                </span>
                                <div type="text" className="form-control homeCheckText" placeholder="Username" aria-describedby="basic-addon1">
                                    <div className="homeCheckInnerText">I have completed task #1</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>

                    <div className="row" style={{marginTop: "05px"}}>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-addon homeCheckDiv" id="basic-addon1">
                                    <span className="glyphicon glyphicon-ok homeCheck" aria-hidden="true"></span>
                                </span>
                                <div type="text" className="form-control homeCheckText" placeholder="Username" aria-describedby="basic-addon1">
                                    <div className="homeCheckInnerText">I have completed task #2</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>

                    <div className="row" style={{marginTop: "05px"}}>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-addon homeCheckDiv" id="basic-addon1">
                                    <span className="glyphicon glyphicon-ok homeCheck" aria-hidden="true"></span>
                                </span>
                                <div type="text" className="form-control homeCheckText" placeholder="Username" aria-describedby="basic-addon1">
                                    <div className="homeCheckInnerText">I have completed task #3</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <center>
                    <div className="row" style={{marginTop: "50px", marginBottom: "20px"}}>
                        <input type="button" className="btn nextButton" data-toggle="modal" data-target="#myModal" value="Next: Start Request" style={{backgroundColor: "#328ABD", color: "white"}} />
                    </div>
                    </center>
        </div>
</div>
          </div>


    );
  }
}
LoginPage1.contextTypes = { history: PropTypes.history }

export default LoginPage1;
