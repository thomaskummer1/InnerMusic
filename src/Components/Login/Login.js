import { useState } from "react";
import { handleLogin } from '../../FirebaseInit.ts'
import './Modal.css'

function Login({login}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleChange() {
        login[0](false)
        login[1](true)
    }
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
                    <button onClick={() => handleLogin(email, password)}>Submit</button>
                    <p>Don't have an account? <button 
                    onClick={() => handleChange()}
                    style={{backgroundColor:'white',
                    color:'#28245e',
                    border:'white'}}
                    >Sign Up</button></p>
                </div>
            </div>
        </div>
    )
}

export default Login