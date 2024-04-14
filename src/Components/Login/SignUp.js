import { useState } from "react";
import { handleSignUp } from "../../FirebaseInit.ts";
import "./Modal.css";
import { useToast } from '@chakra-ui/react'

function SignUp({signup}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUsername] = useState('')
    const toast = useToast()

    function handleChange() {
        signup[1](false)
        signup[0](true)
    }
    function signUp(email, userName, password) {
        const success = handleSignUp(email, userName, password)
        if (success) {
            signup[1](false)
            toast({
                title: "Account Created.",
                description: "Your account has been created successfully.",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
        } else {    
            toast({
                title: "Account Creation Failed.",
                description: "Your account could not be created.",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
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
        </div>
    )
}

export default SignUp