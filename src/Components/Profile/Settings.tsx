import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as client from "../LoginPages/client";
import { setCurrentUser } from "../LoginPages/reducer";

export default function Settings() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };
  const fetchProfile = () => {
    if (!currentUser) return navigate("/SignIn");
    setProfile(currentUser);
  };
  const signout = async () => {
    navigate("/SignIn");
    await client.signout();
    dispatch(setCurrentUser(null));
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="container-fluid bluebutton">
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md float-start">
            <input
              className="form-control"
              placeholder="username"
              defaultValue={profile.username}
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
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
              defaultValue={profile.password}
              onChange={(e) =>
                setProfile({ ...profile, password: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md mt-2 float-start">
            <input
              className="form-control"
              placeholder="email"
              defaultValue={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md mt-2 float-start">
            <input
              className="form-control"
              placeholder="First Name"
              defaultValue={profile.firstName}
              onChange={(e) =>
                setProfile({ ...profile, firstName: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md mt-2 float-start">
            <input
              className="form-control"
              placeholder="Last Name"
              defaultValue={profile.lastName}
              onChange={(e) =>
                setProfile({ ...profile, lastName: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md mt-2 float-start">
            <select
              className="custom-select"
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="EXPERT">Expert</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <button className="me-1 mt-2 col-12" onClick={updateProfile}>
            Update
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <button className="me-1 mt-2 col-12 bg-danger" onClick={signout}>
            Sign Out
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}
