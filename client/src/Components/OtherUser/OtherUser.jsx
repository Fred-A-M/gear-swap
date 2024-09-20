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
    <h2 className='text align-center'>{selectedProfile.username}</h2>
    Request to trade
    <div className='other-profile-container'>
      <div className='other-gear-container'>
       <GearList selectedProfile={selectedProfile}/>
      </div>
      <div className='user-wishlist-container'>
        <WishList selectedProfile={selectedProfile} />
      </div>
    </div>
    </>
  )
}