import { useState, useEffect } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import { WishList, GearList } from './tools'
import UsersProfile from './Components/UsersProfile/UsersProfile';
import NewGearForm from './Components/NewGearForm/NewGearForm';
import OtherUser from './Components/OtherUser/OtherUser';

function App() {
  const [state, setState] = useState('home');
  const [hardWishList, setHardWishList] = useState(WishList);
  const [hardGearList, setHardGearList] = useState(GearList);
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

  function changeWishList (newState) {
    setHardWishList(newState);
  }

  function changeGearList (newState) {
    setHardGearList(newState);
  }

  function handleProfileClick (id) {
    setSelectedProfileId(id);
  };

  return (
    <>
    {state === 'home' && <Home hardWishList={hardWishList} hardGearList={hardGearList} changeState={changeState} handleProfileClick={handleProfileClick} list={list}/>}
    {state === 'profile' && <UsersProfile changeState={changeState} hardGearList={hardGearList} hardWishList={hardWishList}/>}
    {state === 'user' && <OtherUser changeState={changeState} selectedProfileId={selectedProfileId} list={list} />}
    {state === 'newGear' && <NewGearForm state={state} changeState={changeState} changeGearList={changeGearList} hardGearList={hardGearList}/>}
    {state === 'newWish' && <NewGearForm state={state} changeState={changeState} changeWishList={changeWishList} hardWishList={hardWishList}/>}
    </>
  )
}

export default App
