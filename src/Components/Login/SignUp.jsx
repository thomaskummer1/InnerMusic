import { useState } from "react";
import "./Modal.css";
import { doCreateUserWithEmailAndPassword } from "../../Firebase/auth.js";

function SignUp({signup}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUsername] = useState('')
    const [allFieldToast, setAllFieldToast] = useState(false)
    const [passLengthToast, setPassLengthToast] = useState(false)
    // const [successToast, setSuccessToast] = useState(false)
    const [failToast, setFailToast] = useState(false)
    const [isSigningUp, setIsSigningUp] = useState(false)

    function handleChange() {
        signup[1](false)
        signup[0](true)
    }

    function signUp(email, userName, password) {
        if (email === '' || password === '' || userName === '') {
            setAllFieldToast(true)
            setTimeout(() => {
                setAllFieldToast(false)
            }, 2000);
            return
        }
        if (password.length < 6) {
            setPassLengthToast(true)
            setTimeout(() => {
                setPassLengthToast(false)
            }, 2000);
            return
        }
        if (!isSigningUp) {
            setIsSigningUp(true)
            doCreateUserWithEmailAndPassword(email, password)
            console.log('signed up')
            .catch
            ((error) => {
                setIsSigningUp(false)
                setFailToast(true)
                setTimeout(() => {
                    setFailToast(false)
            }, 2000);
            return
            });
            setIsSigningUp(false)
            signup[1](false)
        }
    }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className='modalClose'>
                    <button onClick={() => signup[1](false)}>X</button>
                </div>
                <div className="title">
                    <h1>Sign Up</h1>
                </div>
                <div className="body">
                    <div className='inputBox'>
                        <input onChange={e => {setEmail(e.target.value)}} value={email} type='text' required='required'/>
                        <span>Email</span>
                    </div>
                    <div className='inputBox'>
                        <input onChange={e => {setUsername(e.target.value)}} value={userName}type='text' required='required'/>
                        <span>Username</span>
                    </div>
                    <div className='inputBox'>
                        <input onChange={e => {setPassword(e.target.value)}} value={password} type='password' required='required'/>
                        <span>Password</span>
                    </div>
                    <button onClick={() => signUp(email, userName, password)}>Submit</button>
                    <p>Already have an account? <button 
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
            {/* {successToast && 
            <div className='my-toast'>
                <span className="my-toast__icon">i</span>
                <span>Successfully signed in!</span>
            </div>} */}
            {failToast && 
            <div className='my-toast'>
                <span className="my-toast__icon">i</span>
                <span>Email already in use</span>
            </div>}
            {passLengthToast &&
            <div className='my-toast'>
                <span className="my-toast__icon">i</span>
                <span>Password must be at least 6 characters</span>
            </div>}
        </div> 
    )
}

export default SignUp