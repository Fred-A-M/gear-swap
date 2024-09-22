/* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react'
import GearList from '../GearList/GearList';
import WishList from '../GearList/WishList';
import ContactDetails from './ContactDetails';
import './OtherUser.css'
import { useState } from 'react';

export default function OtherUser ({selectedProfileId, list, hardProfile, requestList, fetchRequests, selectedRequestId}) {
  const [requestSent, setRequestSent] = useState(false);
  const selectedProfile = list.find(profile => profile._id === selectedProfileId);

  function isUserRequestPending () {
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

  function isExternalRequestPending () {
    return requestList.some(request => {
      if (request.senderId === selectedProfileId &&
      request.receiverId === hardProfile._id &&
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

  function isExternalRequestAccepted () {
    return requestList.some(request => {
      if (request.senderId === selectedProfileId &&
      request.receiverId === hardProfile._id &&
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

  async function acceptRequest(requestId) {
    await fetch(`http://localhost:3000/requests/${requestId}/accept`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    });
  }

  async function rejectRequest(requestId) {
    await fetch(`http://localhost:3000/requests/${requestId}/reject`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    });
  }

  async function requestButton () {
    await sendRequest(hardProfile._id, selectedProfileId);
    setRequestSent(true);
    fetchRequests();
  }

  async function acceptButton () {
    await acceptRequest(selectedRequestId);
    fetchRequests();
  }

  async function rejectButton () {
    await rejectRequest(selectedRequestId);
    fetchRequests();
  }

  return (
    <>
    <div className='text-center'>
      <p className='text-2xl underline'>{selectedProfile.username}</p> <br />
      <div className='flex justify-center text-left'>
        {isRequestAccepted() || isExternalRequestAccepted() ? <ContactDetails selectedProfile={selectedProfile}/>
        : isUserRequestPending() || requestSent ? <button className="text-white bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-not-allowed opacity-50">Request pending</button>
        : isExternalRequestPending() ? 
        <div>
          <button onClick={acceptButton} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Accept Request</button>
          <button onClick={rejectButton} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Reject Request</button>
        </div>
        : <button onClick={requestButton} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Request contact details</button> }
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