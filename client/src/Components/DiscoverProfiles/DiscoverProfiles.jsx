/* eslint-disable react/prop-types */
import './DiscoverProfiles.css';

export default function DiscoverProfiles ({profileList, handleProfileClick, changeState}) {


  return (
    <>
    <div className='font-bold underline'>
      All Users
    </div>
    <div className='discover-profiles-container'>
     {profileList.map(function(profile) {
      return (
        <div key={profile._id} className='profile-container hover: cursor-pointer hover:bg-sky-700' onClick={() => {handleProfileClick(profile._id); changeState('user')}}>
          <div className='profile-username'>
              {profile.username}
          </div>
           <div className='profile-gear-list'>
              {profile.gear.map(function(gear) {
                return (
                  <div key={gear._id}>
                    {gear.make} {gear.model}
                    <img src={gear.imageURL} alt="" className="h-10 w-10 flex-none bg-gray-50" />
                  </div>
                )
              })
              }
              </div>
        </div>
      )
    })
    }
    </div>
    </>
  )
}