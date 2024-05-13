import { useEffect, useState } from "react";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import { auth } from "../Firebase/FirebaseInit.ts";

function Navbar() {
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (auth.currentUser) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [loginModal, signupModal]);

    return (  
        <div>
        {!loginModal && !signupModal &&
        <nav className="navbar">
            <h1>Inner Music</h1>
            <div className="links">
                <a href="/">Home</a>
                {!loggedIn && <button onClick={() => setLoginModal(true)}>Sign In</button>}
                {loggedIn && <button onClick={() => setSignupModal(true)}>Profile</button>}
            </div>
        </nav>
        }
        {loginModal && <Login login={[setLoginModal, setSignupModal]}/>}
        {signupModal && <SignUp signup={[setLoginModal, setSignupModal]}/>}
        </div>
    );
}
 
export default Navbar;