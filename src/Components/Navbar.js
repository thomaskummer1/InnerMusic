import { useEffect, useState } from "react";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import { auth } from "../Firebase/FirebaseInit.ts";
import { doSignOut } from "../Firebase/auth.js";

function Navbar() {
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const authListener = auth.onAuthStateChanged((user) => {
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });
        return authListener;
    }, []);

    return (  
        <div>
        {!loginModal && !signupModal &&
        <nav className="navbar">
            <h1>Inner Music</h1>
            <div className="links">
                <a href="/">Home</a>
                {loggedIn && <a href="/" onClick={() => doSignOut()}>Sign Out</a>}
                {!loggedIn && <button onClick={() => setLoginModal(true)}>Sign In</button>}
                {loggedIn && <a href="/profile"><button>Profile</button></a>}
            </div>
        </nav>
        }
        {loginModal && <Login login={[setLoginModal, setSignupModal]}/>}
        {signupModal && <SignUp signup={[setLoginModal, setSignupModal]}/>}
        </div>
    );
}
 
export default Navbar;