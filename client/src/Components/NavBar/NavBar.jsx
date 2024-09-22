/* eslint-disable react/prop-types */

export default function NavBar ({changeState, requestList, hardProfile, handleModal}) {

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

  return (
    <>
    <div className='nav-bar-container h-16 w-full flex justify-between mb-3 bg-orange-400 fixed z-50' >
      <div className='left-nav-items flex h-full items-center pl-3'>
        <div className='logo hover:cursor-pointer'>
          <img className='rounded-full max-h-11' src="./src/assets/logo2.jpeg" alt="logo" onClick={() => changeState('home')}/>
        </div>

      </div>
      <div className='central-nav-items h-full flex items-center'>
        <div>
          <form className='search-bar' >
            <input type="text" className='input-field h-9 rounded-xl' autoComplete='off' placeholder='Search...' />
          </form>
        </div>
      </div>
      <div className='right-nav-items flex h-full items-center pr-3'>
      <div onClick={() => handleModal('requests')} className='notfication-bell mx-2 hover:cursor-pointer'>
        {doesUserHavePendingRequests() ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
            <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clipRule="evenodd" />
          </svg> : 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>}
      </div>
        <div className='profile-icon mx-2 hover:cursor-pointer' onClick={() => changeState('profile')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}