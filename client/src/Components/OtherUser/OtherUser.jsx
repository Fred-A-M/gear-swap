/* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import GearList from '../GearList/GearList';
import WishList from '../GearList/WishList';
import ContactDetails from './ContactDetails';
import './OtherUser.css'
import { useState } from 'react';

export default function OtherUser ({changeState, selectedProfileId, list, hardProfile, requestList, fetchRequests}) {
  const [requestSent, setRequestSent] = useState(false);
  const selectedProfile = list.find(profile => profile._id === selectedProfileId);

  function isRequestPending () {
    return requestList.some(request => {
      if (request.senderId === hardProfile._id &&
      request.receiverId === selectedProfileId &&
      request.status === 'pending') {
        return true;
      } else {
        return false;
      }
    });
  }

  function isRequestAccepted () {
    return requestList.some(request => {
      if (request.senderId === hardProfile._id &&
      request.receiverId === selectedProfileId &&
      request.status === 'accepted') {
        return true;
      } else {
        return false;
      }
    });
  }

  function sendRequest(senderId, receiverId) {
    fetch('http://localhost:3000/requests/send', {
      method: 'POST',
      body: JSON.stringify({ senderId, receiverId }),
      headers: { 'Content-Type': 'application/json' }
    });
  }

  function requestButton () {
    sendRequest(hardProfile._id, selectedProfileId);
    setRequestSent(true);
    fetchRequests();
  }

  return (
    <>
    <NavBar changeState={changeState} />
    <div className='text-center'>
      <p className='text-2xl underline'>{selectedProfile.username}</p> <br />
      <div className='flex justify-center text-left'>
      {isRequestAccepted() ? <ContactDetails selectedProfile={selectedProfile}/>
      : !requestSent && !isRequestPending() &&!isRequestAccepted() ? <button onClick={requestButton} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Request contact details</button> 
      : <button className="text-white bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-not-allowed opacity-50">Request pending</button>}
      </div>
    </div>
    <div className='other-profile-container'>
      <div className='other-gear-container border'>
       <GearList selectedProfile={selectedProfile}/>
      </div>
      <div className='user-wishlist-container border'>
        <WishList selectedProfile={selectedProfile} />
      </div>
    </div>
    </>
  )
}