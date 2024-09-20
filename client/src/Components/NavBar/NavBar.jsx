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
        <div className='profile-icon'>
          <img src="./src/assets/profileIcon.png" alt="profile" onClick={() => changeState('profile')}/>
        </div>
      </div>
    </div>
    </>
  )
}