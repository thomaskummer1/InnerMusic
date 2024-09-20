import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/SignIn">Sign In</Link>
    </div>
  );
}
