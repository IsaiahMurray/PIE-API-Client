import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

function App() {

  const [sessionToken, setSessionToken] = useState('undefined');
  console.log(sessionToken);

  // let [one, two, three] = ['first', 'second', 2 + 2];
  // console.log(one, two, three);

  return (
    <div className="App">
      <Navbar setSession={sessionToken}/>
      <Auth/>
      <Pies/>
    </div>
  );
}

export default App;
