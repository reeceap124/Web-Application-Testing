import React, {useState} from 'react';

import './App.css';

import { Display } from './components/Display';
import { Dashboard } from './components/Dashboard';

function App() {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)
  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard balls={balls} setBalls={setBalls} strikes={strikes} setStrikes={setStrikes}/>
    </div>
  );
}

export default App;
