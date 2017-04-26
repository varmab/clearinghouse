import React from 'react';
import { Link,PropTypes} from 'react-router';
import Header from './Header';

class LoginPage extends React.Component {


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
<div className="container">
    <div className="row">
        <div className="form_bg">
            <form>
                 <h2 className="text-center">Login Page</h2>
                <br/>
                <div className="form-group">
                    <input type="email" className="form-control" id="userid" placeholder="User id"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="pwd" placeholder="Password"/>
                
                    </div>
                    <br/>
                   <div className="align-center">
                <button type="submit" className="btn btn-default" id="login">Login</button>
                    </div>
            </form>
        </div>
    </div>
    <button type="submit" className="btn btn-default" id="login" onClick={this.redirectTo.bind(this, "home1")}>Requestor</button>
    <button type="submit" className="btn btn-default" id="login" onClick={this.redirectTo.bind(this, "admin2")}>Admin</button>
</div>

    );
  }
}
LoginPage.contextTypes = { history: PropTypes.history }

export default LoginPage;
