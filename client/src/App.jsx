import { useState, useEffect } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import { profile } from './tools'
import UsersProfile from './Components/UsersProfile/UsersProfile';
import NewGearForm from './Components/NewGearForm/NewGearForm';
import OtherUser from './Components/OtherUser/OtherUser';
import RequestsPage from './Components/RequestsPage/RequestsPage';
import NavBar from './Components/NavBar/NavBar';
import Modal from './Components/Modal/Modal';
import FriendsPage from './Components/FriendsPage/FriendsPage';
import LoginPage from './Components/LogInPage/LoginPage';

function App() {
  const [state, setState] = useState('login');
  const [hardProfile, setHardProfile] = useState(profile);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [list, setList] = useState([]);
  const [requestList, setRequestList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [locationFilter, setLocationFilter] = useState('');

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

  function handleRequestClick (id) {
    setSelectedRequestId(id);
  }
  
  function changeLocation (event) {
    const location = event.target.value;
    setLocationFilter(location);
  }

  function handleModal (content) {
    setModalContent(content)
    setIsModalVisible(true)
  }

  function stopModal () {
    setIsModalVisible(false);
  }

  return (
    <>
    {state === 'login' && <LoginPage changeState={changeState} />}

    
    <NavBar changeState={changeState} requestList={requestList} hardProfile={hardProfile} handleModal={handleModal} fetchRequests={fetchRequests} list={list} changeLocation={changeLocation} />
    <div className='pt-16 bg-yellow-50'>
      {state === 'home' && <Home hardProfile={hardProfile} changeState={changeState} handleProfileClick={handleProfileClick} list={list} fetchRequests={fetchRequests} locationFilter={locationFilter} />}
      {state === 'profile' && <UsersProfile hardProfile={hardProfile} handleModal={handleModal} fetchProfiles={fetchProfiles} changeProfile={changeProfile} />}
      {state === 'user' && <OtherUser selectedProfileId={selectedProfileId} list={list} hardProfile={hardProfile} requestList={requestList} fetchRequests={fetchRequests} selectedRequestId={selectedRequestId} changeProfile={changeProfile} fetchProfiles={fetchProfiles} />}
      {state === 'friends' && <FriendsPage requestList={requestList} list={list} hardProfile={hardProfile} handleProfileClick={handleProfileClick} changeState={changeState} fetchRequests={fetchRequests} />}

      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
        {modalContent === 'requests' && (
          <RequestsPage onClose={() => setIsModalVisible(false)} requestList={requestList} list={list} hardProfile={hardProfile} changeState={changeState} handleProfileClick={handleProfileClick} handleRequestClick={handleRequestClick} stopModal={stopModal}/>
        )}
        {modalContent === 'newGear' && (
          <NewGearForm onClose={() => setIsModalVisible(false)} changeProfile={changeProfile} hardProfile={hardProfile} fetchProfiles={fetchProfiles} handleModal={handleModal} stopModal={stopModal} modalContent={modalContent}/>
        )}
        {modalContent === 'newWish' && (
          <NewGearForm onClose={() => setIsModalVisible(false)} changeProfile={changeProfile} hardProfile={hardProfile} fetchProfiles={fetchProfiles} handleModal={handleModal} stopModal={stopModal} modalContent={modalContent}/>
        )}
      </Modal>
    </div>
    </>
  )
}

export default App
