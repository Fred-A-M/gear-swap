/* eslint-disable react/prop-types */
import './NavBar.css'

export default function NavBar ({changeState}) {

  return (
    <>
    <div className='nav-bar-container' >
      <div className='left-nav-items'>
        <div className='logo'>
          <img src="./src/assets/logo.jpg" alt="logo" onClick={() => changeState('home')}/>
        </div>

      </div>
      <div className='central-nav-items'>
        <div>
          <form className='search-bar' >
            <input type="text" className='input-field' autoComplete='off' placeholder='Search...' />
          </form>
        </div>
      </div>
      <div className='right-nav-items'>
      <div className='notfication-bell mx-2 hover:cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
      </div>
        <div className='profile-icon mx-2 hover:cursor-pointer'>
          <svg onClick={() => changeState('profile')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}