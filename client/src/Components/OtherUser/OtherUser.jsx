/* eslint-disable react/prop-types */
import GearList from './GearList';
import WishList from './WishList';
import ContactDetails from './ContactDetails';
import { useState } from 'react';
import { sendRequest, acceptRequest, rejectRequest, createNewWishDB } from '../../tools';

export default function OtherUser ({selectedProfileId, list, hardProfile, requestList, fetchRequests, selectedRequestId, changeProfile, fetchProfiles}) {
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

  function addToMockWishlist (instrument, make, model) {
    const newGear = {
     instrument: instrument,
     make: make,
     model: model
    };
     changeProfile((previousProfile) => ({
       ...previousProfile,
       wishlist: [...previousProfile.wishlist, newGear]
     }));
    }
   
  async function addToUsersWishList (instrument, make, model) {
    await createNewWishDB(hardProfile._id, instrument, make, model);
    addToMockWishlist(instrument, make, model);
    fetchProfiles();
  }

  return (
    <>
    <div className='mt-6'>
      <div className='text-center'>
        <p className='text-2xl underline font-bold'>{selectedProfile.username}</p> <br />
        <div className='flex justify-center text-left'>
          {isRequestAccepted() || isExternalRequestAccepted() ? <ContactDetails selectedProfile={selectedProfile}/>
          : isUserRequestPending() || requestSent ? <button className="text-white bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-not-allowed opacity-50">Request pending</button>
          : isExternalRequestPending() ? 
          <div>
            <button onClick={acceptButton} className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Accept Request</button>
            <button onClick={rejectButton} className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Reject Request</button>
          </div>
          : <button onClick={requestButton} className="text-white bg-base hover:bg-basehover font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Request contact details</button> }
        </div>
      </div>
      <div className='other-profile-container flex h-max'>
        <div className='other-gear-container flex-1 m-3 flex flex-col items-center'>
        <GearList selectedProfile={selectedProfile} hardProfile={hardProfile} addToUsersWishList={addToUsersWishList} />
        </div>
        <div className='user-wishlist-container flex-1 m-3 flex flex-col items-center'>
          <WishList selectedProfile={selectedProfile} hardProfile={hardProfile} addToUsersWishList={addToUsersWishList} />
        </div>
      </div>
    </div>
    </>
  )
}