import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';
import Pie from './components/Pies/Pie/Pie';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  console.log(sessionToken);

  // let [one, two, three] = ['first', 'second', 2 + 2];
  // console.log(one, two, three);

  const viewConductor = () => {
    return sessionToken !== undefined ?
    <Pies token={sessionToken}/> :
    <Auth updateToken={updateToken}/>
  }

  const updateToken = newToken => {
    localStorage.setItem('token:', newToken);
    setSessionToken(newToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  return (
    <div className="App">
      <Navbar clearToken={clearToken}/>
      {viewConductor()}
    </div>
  );
}

export default App;
