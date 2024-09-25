/* eslint-disable react/prop-types */
import { useState } from 'react'
export default function GearList ({selectedProfile, addToUsersWishList}) {
  const [heartedItems, setHeartedItems] = useState({}); // State to track hearted items

  const toggleHeart = (gearId) => {
    setHeartedItems((prevState) => ({
      ...prevState,
      [gearId]: !prevState[gearId], // Toggle the heart state for the selected gear
    }));
  };

  return (
    <>
     <div className='user-gear-list w-4/5 min-w-80 transition duration-300 bg-orange-50 hover:bg-orange-100 rounded-2xl mb-8 drop-shadow-2xl p-6 h-max'>
        <ul role="list" className="divide-y divide-gray-100">
          {selectedProfile.gear.map((gear) => (
            <li key={gear._id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4 ">
                {!gear.imageURL ? <img src='/src/assets/logo2.jpeg' className="w-12 h-12 rounded-full shadow-md"/> : 
                <img alt="" src={gear.imageURL} className="h-12 w-12 flex-none rounded-full bg-gray-50 self-center" />
                }
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{gear.make}</p>
                  <p className="text-sm font-semibold leading-6 text-gray-500">{gear.model}</p>
                  <p className="text-sm leading-6 text-gray-900">{gear.instrument}</p>
                </div>
              </div>
              <div onClick={() => {addToUsersWishList(gear.instrument, gear.make, gear.model); toggleHeart(gear.instrument)}} className="hidden shrink-0 sm:flex sm:flex-col sm:items-end self-center">
              {!heartedItems[gear.instrument] ? 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg> : 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}