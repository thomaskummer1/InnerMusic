import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as client from "./client";

export default function SignIn() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    let user;
    try {
      user = await client.signin(credentials);
    } catch (error) {
      alert("Invalid credentials");
    }
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Profile/" + user._id + "/Ratings");
  };
  return (
    <div className="container-fluid bluebutton">
      <div className="row">
        <h3>Sign in</h3>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md float-start">
            <input
              className="form-control"
              placeholder="username"
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
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
              placeholder="password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <button onClick={signin} className="me-1 mt-2 col-12">
            Sign in
          </button>
        </div>
      </div>
      <br />
      <Link id="wd-signup-link" to="/Signup">
        Sign up
      </Link>
    </div>
  );
}
