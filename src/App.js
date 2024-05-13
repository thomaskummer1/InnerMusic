import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
    <Navbar />
      <div className='content'>
      <Home />
      </div>
    </div>
  );
}

export default App;
