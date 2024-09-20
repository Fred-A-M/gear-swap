/* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import UserGearList from './UserGearList'
import UserWishList from './UserWishList'
import './UsersProfile.css'

export default function UsersProfile ({hardProfile, changeState}) {
 

  return (
    <>
    <NavBar changeState={changeState} />
    <div className='user-profile-container'>
      <div className='user-gear-container border'>
        <button onClick={() => changeState('newGear')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add new owned gear</button>
        <UserGearList hardProfile={hardProfile} />
      </div>
      <div className='user-wishlist-container border'>
        <button onClick={() => changeState('newWish')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add new wish-list item</button>
       <UserWishList hardProfile={hardProfile}/>
      </div>
    </div>
    </>
  )
}