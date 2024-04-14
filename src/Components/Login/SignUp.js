function SignUp({signup}) {
    function handleSignup() {
        signup[1](false)
        signup[0](true)
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
                        <input type='text' required='required'/>
                        <span>Email</span>
                    </div>
                    <div className='inputBox'>
                        <input type='text' required='required'/>
                        <span>Username</span>
                    </div>
                    <div className='inputBox'>
                        <input type='password' required='required'/>
                        <span>Password</span>
                    </div>
                    <button>Submit</button>
                    <p>Already have an account? <button 
                    onClick={() => handleSignup()}
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