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
  const [requestList, setRequestList] = useState([]);

  async function fetchProfiles () {
    try {
      const res = await fetch('http://localhost:3000/profiles')
      const data = await res.json();
      setList(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchRequests () {
    try {
      const res = await fetch('http://localhost:3000/requests')
      const data = await res.json();
      setRequestList(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProfiles();
    fetchRequests();
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
    {state === 'home' && <Home hardProfile={hardProfile} changeState={changeState} handleProfileClick={handleProfileClick} list={list} fetchRequests={fetchRequests} />}
    {state === 'profile' && <UsersProfile changeState={changeState} hardProfile={hardProfile}/>}
    {state === 'user' && <OtherUser changeState={changeState} selectedProfileId={selectedProfileId} list={list} hardProfile={hardProfile} requestList={requestList} fetchRequests={fetchRequests} />}
    {state === 'newGear' && <NewGearForm state={state} changeState={changeState} changeProfile={changeProfile} hardProfile={hardProfile} fetchProfiles={fetchProfiles} />}
    {state === 'newWish' && <NewGearForm state={state} changeState={changeState} changeProfile={changeProfile} hardProfile={hardProfile} fetchProfiles={fetchProfiles} />}
    </>
  )
}

export default App
