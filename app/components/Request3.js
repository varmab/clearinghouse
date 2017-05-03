import React from 'react';
import { Link,PropTypes} from 'react-router';
import Header from './Header';
import SubHeader from './SubHeader';

class Request3 extends React.Component {


  constructor(props) {
        super(props)
        this.state = {
              requestValue:"A New URL (one submission per URL)",
              requestingURLs: []
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

  addRequestingURL(e) {
    e.preventDefault();

    console.log($("#requestingURL").val());
    $('#urlError').hide();

    var url = $("#requestingURL").val().trim();
    var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

    if(url == "" || !re.test(url)) {
      $('#urlError').show();
    }
    else {
      $('#urlError').hide();
      var requestingURLs = this.state.requestingURLs;
      requestingURLs.push(url);
      this.setState({requestingURLs: requestingURLs});
      $("#requestingURL").val("");
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
                        <button className="btn btn-default dropdown-toggle" type="button" id="menu1" style={{width:'100%',backgroundColor: 'white',textAlign: 'left',height: '40px',outline: 0, marginTop: "-5px", border: "0px", color: "#308bc0", paddingLeft: "0px"}} data-toggle="dropdown">{this.state.requestValue}
                          <span style={{float:'right'}}><i className="fa fa-angle-down" aria-hidden="true" /></span></button>
                          <span style={{ fontSize: "12px", color: "#ccc"}}>A new Branding Name, 3rd PARTY USE of Guardian Name & logo</span>
                        <ul className="dropdown-menu requestDropdown" role="menu" aria-labelledby="menu1" style={{width: '100%',margin: '0px',letterSpacing: '0px'}}>
                          <li onClick={this.requestValue.bind(this,"A New URL (one submission per URL)")}>A New URL (one submission per URL)</li>
                          <li onClick={this.requestValue.bind(this,"A New Branding Name")}>A New Branding Name</li>

                          <li onClick={this.requestValue.bind(this,"3rd PARTY USE of Guardian Name & Logo")}>3rd PARTY USE of Guardian Name & Logo</li>
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
                      <div className="col-md-3"></div>
                      <div className="col-md-6" >
                                  <div>
                                  Add the name of URL you are requesting
                                  <div>
                                  <div className="row" style={{marginTop: "10px"}}>
                                    {
                                      this.state.requestingURLs.map((url, key) => {
                                        var redirectUrl = url;
                                        if(redirectUrl.indexOf("http") != 0)
                                          redirectUrl = "http://"+redirectUrl;

                                        return <div className="col-md-6" style={{marginTop: "10px"}} key={key}>
                                          <div className="input-group">
                                            <span style={{ borderColor: "#eee", backgroundColor: "#eee"}} className="input-group-addon" id="basic-addon1">
                                              <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                            </span>
                                            <a style={{ borderColor: "#eee", backgroundColor: "#eee", color: "rgb(48, 139, 192)"}} className="form-control" href={redirectUrl} target="_blank" aria-describedby="basic-addon1">{url}</a>
                                          </div>
                                        </div>
                                      })
                                    }

                                  </div>

                                  </div>


                                  <div className="input-group" style={{marginTop: "20px"}}>
                                    <form onSubmit={this.addRequestingURL.bind(this)}  aria-describedby="basic-addon2">
                                      <input type="text" id="requestingURL" className="form-control nullShadow" placeholder="Enter any URL.." />
                                    </form>
                                    <span className="input-group-addon nullShadow" style={{color: "rgb(48, 139, 192)", fontSize: "20px"}} id="basic-addon2">
                                      <span className="glyphicon glyphicon-plus-sign" aria-hidden="true" style={{cursor: "pointer"}} onClick={this.addRequestingURL.bind(this)}></span>
                                    </span>
                                  </div>
                                  <div id="urlError" style={{color: "red", display: "none"}}>
                                    *Invalid URL
                                  </div>

                                  </div>

                                  <div style={{marginTop: "20px"}}>
                                  <span>What type of research did you do for this name/URL submission? Did you conduct a Google and/or Internet search?  What were the results of that search?</span>

                                   <textarea style={{resize: "none", marginTop: "20px"}} className="form-control nullShadow nullShadow" rows="5" id="comment"></textarea>
                                  </div>

                                  <div style={{marginTop: "20px"}}>
                                  Name of Key Stakeholders or Business Areas for this request
                                  <div className="input-group" style={{marginTop: "20px"}}>
                                    <input type="text" className="form-control nullShadow" placeholder="Enter Stakholders's Name" aria-describedby="basic-addon2" />
                                    <div className="input-group-addon nullShadow">
                                      <div className="nullShadow" style={{ borderBottomLeftRadius: "28px", borderBottomRightRadius: "28px", borderTopRightRadius: "28px", padding: "5px 10px", borderTopLeftRadius: "28px", backgroundColor: "rgb(48, 139, 192)", color: "white", fontSize: "15px", height: "28px"}} id="basic-addon2">
                                        <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Add
                                      </div>

                                    </div>
                                  </div>
                                  </div>

                                  <div style={{marginTop: "20px"}}>
                                  What would the implications if you could not own/use this specific Name and/or URL For example, is the name owned by another company in a different industry? Is the URL in use but not the name?

                                   <textarea style={{resize: "none", marginTop: "20px"}} className="form-control nullShadow" rows="5" id="comment"></textarea>
                                  </div>
                                  <div>
                                  Could the <a>http://guardianlife.com</a> website be a possible home for this content?
                                  <div style={{marginTop: "20px"}}>
                                      <label className="radio-inline">
                                      <input type="radio" name="optradio"/>Yes
                                      </label>
                                      <label className="radio-inline">
                                      <input type="radio" name="optradio"/>No
                                      </label>
                                      </div>
                                  </div>

                                  <div style={{marginTop: "20px"}}>
                                  Where else do you envision this Branding or Advertising Name and/or URL to exist?

                                   <textarea style={{resize: "none", marginTop: "20px"}} className="form-control nullShadow" rows="5" id="comment"></textarea>
                                  </div>


                <div className="row">
                <div className="col-md-4 row text-center" style={{marginTop: '40px',marginBottom: '40px'}}>
                      <input type="button" onClick={this.redirectTo.bind(this, "request2")} className="btn nextButton btn-default"  style={{height: '45px', width:'80%'}} value="Back" />
                </div>
                <div className="col-md-4 row text-center" style={{marginTop: '40px',marginBottom: '40px'}}>
                      <input type="button" onClick={this.redirectTo.bind(this, "request")} className="btn nextButton btn-default"  style={{height: '45px', width:'80%', color: 'blue' }} value="Save as Draft" />
                </div>
                <div className="col-md-4 row text-center" style={{marginTop: '40px',marginBottom: '40px'}}>
                      <input type="button" onClick={this.redirectTo.bind(this, "review")} className="btn nextButton btn-info"  style={{height: '45px', width:'80%'}} value="Next: Review" />
                </div>
                </div>
                      </div>
                      <div className="col-md-3"></div>
                    </div>

          </div>
        </div>
      </div>
    );
  }
}
Request3.contextTypes = { history: PropTypes.history }

export default Request3;
