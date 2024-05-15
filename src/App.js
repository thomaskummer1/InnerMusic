import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';

import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
`     <Routes>
        <Route path="/" element={
          <div className="App">
            <Navbar />
            <div className='content'>
            <Home />
            </div>
          </div>} />
        <Route path="/profile" element={
          <div className="App">
            <Navbar />
            <div className='content'>
            <Profile />
            </div>
          </div>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
