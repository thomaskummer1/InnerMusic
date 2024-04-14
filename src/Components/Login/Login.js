import './Modal.css'

function Login({login}) {
    function handleSignup() {
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
                        <input type='text' required='required'/>
                        <span>Email</span>
                    </div>
                    <div className='inputBox'>
                        <input type='password' required='required'/>
                        <span>Password</span>
                    </div>
                    <button>Submit</button>
                    <p>Don't have an account? <button 
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

export default Login