/* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import GearList from '../GearList/GearList';
import WishList from '../GearList/WishList';
import './OtherUser.css'

export default function OtherUser ({changeState, selectedProfileId, list}) {
  const selectedProfile = list.find(profile => profile._id === selectedProfileId);


  return (
    <>
    <NavBar changeState={changeState} />
    <div className='text-center'>
      <p className='text-2xl underline'>{selectedProfile.username}</p> <br />
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Request to trade</button>
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