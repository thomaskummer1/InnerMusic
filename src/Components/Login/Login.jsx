import { useState } from "react";
import './Modal.css'
import { doSignInWithEmailAndPassword } from "../../Firebase/auth.js";
import { useAuth } from "../../Contexts/authContext/index.jsx";

function Login({login}) {
    //const { loggedIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [allFieldToast, setAllFieldToast] = useState(false)

    function handleChange() {
        login[0](false)
        login[1](true)
    }
    function doLogin(email, password) {
        if (email === '' || password === '') {
            setAllFieldToast(true)
            setTimeout(() => {
                setAllFieldToast(false)
            }, 2000);
            return
        }
        console.log(email, password)
        if(!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithEmailAndPassword(email, password)
            .then(() => {
                setIsSigningIn(false)
                login[0](false)
            })
            .catch((error) => {
                setIsSigningIn(false)
                alert(error.message)
            })
        
        }
    }
    // if (loggedIn) {
    //     return <></>
    // }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className='modalClose'>
                    <button onClick={() => login[0](false)}>X</button>
                </div>
                <div className="title">
                    <h1>Login</h1>
                </div>
                <div className="body">
                    <div className='inputBox'>
                        <input onChange={e => {setEmail(e.target.value)}} value={email} type='text' required='required'/>
                        <span>Email</span>
                    </div>
                    <div className='inputBox'>
                        <input onChange={e => {setPassword(e.target.value)}} value={password} type='password' required='required'/>
                        <span>Password</span>
                    </div>
                    <button onClick={() => doLogin(email, password)}>Submit</button>
                    <p>Don't have an account? <button 
                    onClick={() => handleChange()}
                    style={{backgroundColor:'white',
                    color:'#28245e',
                    border:'white'}}
                    >Sign Up</button></p>
                </div>
            </div>
            {allFieldToast && 
            <div className='my-toast'>
                <span className="my-toast__icon">i</span>
                <span>Please fill out all fields</span>
            </div>}
        </div>
    )
}

export default Login