import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./reducer";
export default function SignUp() {
  const [user, setUser] = useState<any>({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    if (user.password === confirmPassword) {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/Profile/" + currentUser._id + "/Ratings");
    }
  };
  return (
    <div className="container-fluid bluebutton">
      <div className="row">
        <h3>Sign up</h3>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md float-start">
            <input
              className="form-control"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="username"
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
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="confirm password"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <button className="me-1 mt-2 col-12" onClick={signup}>
            Create Account
          </button>
        </div>
      </div>
      <br />
      <Link id="wd-signup-link" to="/Signin">
        Sign in
      </Link>
    </div>
  );
}
