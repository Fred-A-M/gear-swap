/* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import './UsersProfile.css'

export default function UsersProfile ({hardWishList, hardGearList, changeState}) {
 

  return (
    <>
    <NavBar changeState={changeState} />
    <div className='user-profile-container'>
      <div className='user-gear-container'>
        <button onClick={() => changeState('newGear')}>Add new owned gear</button>
        <div className='user-gear-list'>
        <ul role="list" className="divide-y divide-gray-100">
          {hardGearList.map((gear) => (
            <li key={gear.instrument} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img alt="" src={gear.imageURL} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{gear.make}</p>
                  <p className="text-sm font-semibold leading-6 text-gray-500">{gear.model}</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{gear.instrument}</p>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
      <div className='user-wishlist-container'>
      <button className='' onClick={() => changeState('newWish')}>Add new wish-list item</button>
        <div className='user-wish-list'>
          <ul role="list" className="divide-y divide-gray-100">
            {hardWishList.map((gear) => (
              <li key={gear.instrument} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <img alt="" src={gear.imageURL} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{gear.make}</p>
                    <p className="text-sm font-semibold leading-6 text-gray-500">{gear.model}</p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">{gear.instrument}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}