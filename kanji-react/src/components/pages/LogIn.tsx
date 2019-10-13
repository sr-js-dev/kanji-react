import * as React from "react";
import { connect } from "react-redux";

import { logIn } from "../../actions/current";
export interface LoginProps {
  logInConnect: () => void;
}
class LogIn extends React.Component<LoginProps, {}> {
  submitForm = (e: any): void => {
    e.preventDefault();
    let clientFormData: any={};
    let data: any={};
    clientFormData = new FormData(e.target);
    data = {};
    for (let key of clientFormData.keys()) {
      data[key] = clientFormData.get(key);
    }
    if(data.uname==="admin" && data.passw==="admin"){
      this.props.logInConnect()
    }
  }
    render(){
      return(
        <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
              </p>
              {/* <ListErrors errors={this.state.error} /> */}
              <form onSubmit={this.submitForm}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name='uname'
                      placeholder="Username"
                      // value={this.props.login.uname}
                      />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      name='passw'
                      placeholder="Password"
                      // value={this.props.login.passw}
                      />
                  </fieldset>
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    >
                    Sign in
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
      )
    }
}
const mapDispatchToProps = {
  logInConnect: logIn
};

export default connect(
  null,
  mapDispatchToProps,
)(LogIn);
