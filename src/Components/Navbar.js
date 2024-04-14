import { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";

function Navbar() {
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);

    return (  
        <div>
        {!loginModal && !signupModal &&
        <nav className="navbar">
            <h1>Inner Music</h1>
            <div className="links">
                <a href="/">Home</a>
                <button onClick={() => setLoginModal(true)}>Sign In</button>
            </div>
        </nav>
        }
        {loginModal && <Login login={[setLoginModal, setSignupModal]}/>}
        {signupModal && <SignUp signup={[setLoginModal, setSignupModal]}/>}
        </div>
    );
}
 
export default Navbar;