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

function App() {
  const [state, setState] = useState('home');
  const [hardProfile, setHardProfile] = useState(profile);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [list, setList] = useState([]);
  const [requestList, setRequestList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

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

  function handleModal (content) {
    setModalContent(content)
    setIsModalVisible(true)
  }

  function stopModal () {
    setIsModalVisible(false);
  }

  return (
    <>
    <NavBar changeState={changeState} requestList={requestList} hardProfile={hardProfile} handleModal={handleModal} />
    {state === 'home' && <Home hardProfile={hardProfile} changeState={changeState} handleProfileClick={handleProfileClick} list={list} fetchRequests={fetchRequests} />}
    {state === 'profile' && <UsersProfile hardProfile={hardProfile} fetchRequests={fetchRequests} handleModal={handleModal}/>}
    {state === 'user' && <OtherUser selectedProfileId={selectedProfileId} list={list} hardProfile={hardProfile} requestList={requestList} fetchRequests={fetchRequests} selectedRequestId={selectedRequestId} />}

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
    </>
  )
}

export default App
