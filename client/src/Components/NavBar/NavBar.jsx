/* eslint-disable react/prop-types */
import { HiOutlineUsers, HiUsers, HiBell, HiOutlineBell, HiUser } from "react-icons/hi2";

export default function NavBar ({changeState, requestList, hardProfile, handleModal, fetchRequests, list, changeLocation}) {

  function doesUserHavePendingRequests () {
    return requestList.some(request => {
      if (request.receiverId === hardProfile._id &&
      request.status === 'pending') {
        return true;
      } else {
        return false;
      }
    });
  }

  function doesUserHaveFriends () {
    return requestList.some(request => {
      if ((request.receiverId === hardProfile._id || request.senderId === hardProfile._id) &&
      request.status === 'accepted') {
        return true;
      } else {
        return false;
      }
    });
  }

  const locations = [...new Set(list.map(profile => profile.location))];

  return (
    <>
    <div className='nav-bar-container h-16 w-full flex justify-between items-center mb-3 bg-boxes fixed z-40' >
      <div className='left-nav-items flex h-full items-center pl-3 gap-2'>
        <div>
          <img className='rounded-full max-h-11 hover:cursor-pointer' src="./src/assets/logo2.png" alt="logo" onClick={() => changeState('home')}/>
        </div>
        <div>
          <img className='h-8 mt-2 hover:cursor-pointer' src="./src/assets/textred.png" alt="logo" onClick={() => changeState('home')}/>
        </div>
      </div>
      <div className='central-nav-items flex items-center absolute left-1/2 transform -translate-x-1/2'>
        <div>
          <select onChange={changeLocation} className='search-bar h-9 w-52 rounded-xl bg-background text-center text-boxes' >
          <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='right-nav-items flex h-full items-center pr-3'>
        <div className='friends-icon mx-2 hover:cursor-pointer' onClick={() => {changeState('friends'); fetchRequests()}}>
          {doesUserHaveFriends() ? 
          <HiUsers size={24} className='text-background'/> : 
          <HiOutlineUsers size={24} className='text-background' />
         }
          
        </div>
        <div onClick={() => {handleModal('requests'); fetchRequests()}} className='notfication-bell mx-2 hover:cursor-pointer'>
          {doesUserHavePendingRequests() ?
            <HiBell size={36} className='text-background'/> : 
            <HiOutlineBell size={24} className='text-background'/>}
        </div>
        <div className='profile-icon mx-2 hover:cursor-pointer' onClick={() => {changeState('profile'); fetchRequests()}}>
          <HiUser size={24} className='text-background'/>
        </div>
      </div>
    </div>
    </>
  )
}