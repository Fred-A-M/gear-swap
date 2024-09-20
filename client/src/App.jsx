import { useState, useEffect } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import { profile } from './tools'
import UsersProfile from './Components/UsersProfile/UsersProfile';
import NewGearForm from './Components/NewGearForm/NewGearForm';
import OtherUser from './Components/OtherUser/OtherUser';

function App() {
  const [state, setState] = useState('home');
  const [hardProfile, setHardProfile] = useState(profile);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [list, setList] = useState([]);

  async function fetchProfiles () {
    try {
      const res = await fetch('http://localhost:3000/profiles')
      const data = await res.json();
      setList(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProfiles();
  }, []);

  function changeState (newState) {
    setState(newState);
  }

  function changeProfile (newState) {
    setHardProfile(newState);
  }

  function handleProfileClick (id) {
    setSelectedProfileId(id);
  };

  return (
    <>
    {state === 'home' && <Home hardProfile={hardProfile} changeState={changeState} handleProfileClick={handleProfileClick} list={list}/>}
    {state === 'profile' && <UsersProfile changeState={changeState} hardProfile={hardProfile}/>}
    {state === 'user' && <OtherUser changeState={changeState} selectedProfileId={selectedProfileId} list={list} />}
    {state === 'newGear' && <NewGearForm state={state} changeState={changeState} changeProfile={changeProfile} hardProfile={hardProfile} fetchProfiles={fetchProfiles} />}
    {state === 'newWish' && <NewGearForm state={state} changeState={changeState} changeProfile={changeProfile} hardProfile={hardProfile} fetchProfiles={fetchProfiles} />}
    </>
  )
}

export default App
