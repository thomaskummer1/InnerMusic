import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="container-fluid bluebutton">
      <div className="row">
        <h3>Sign up</h3>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md float-start">
            <input className="form-control" placeholder="username" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md mt-2 float-start">
            <input
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md mt-2 float-start">
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <Link to="/">
            <button className="me-1 mt-2 col-12">Create Account</button>
          </Link>
        </div>
      </div>
      <br />
      <Link id="wd-signup-link" to="/Signin">
        Sign in
      </Link>
    </div>
  );
}
