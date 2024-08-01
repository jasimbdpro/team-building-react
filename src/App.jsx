import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([])
  const [joined, setJoined] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, [])
  const joinTeam = (i) => {
    const newTeam = [...joined, i]
    setJoined(newTeam)
  }
  return (
    <div className="App">
      <ul>
        {
          joined.map(m => <li>{m}</li>)
        }
      </ul>
      {
        users.map(i => <User joinTeam={joinTeam} key={i.id} user={i}></User>)
      }
    </div>
  );
}

export default App;
