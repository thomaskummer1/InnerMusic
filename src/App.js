import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { firebaseConfig } from './FirebaseInit.ts';
import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    initializeApp(firebaseConfig)
  }, [])
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
