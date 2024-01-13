const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Inner Music</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#28245e',
                    borderRadius: '8px'
                }}>Sign In</a>
            </div>
        </nav>
    );
}
 
export default Navbar;