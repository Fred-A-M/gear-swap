/* eslint-disable react/prop-types */
import './MatchedProfiles.css'

export default function MatchedProfiles ({profileList, hardProfile, changeState, handleProfileClick}) {

  function isMatch (user, wish) {
    return user.gear.some(gearItem => {
      return wish.wishlist.some(wishItem => {
        if (gearItem.instrument === wishItem.instrument &&
        gearItem.make === wishItem.make &&
        gearItem.model === wishItem.model)
        return true;
      });
    });
  }


  return (
    <>
    <div className='font-bold underline'>
      Matched Users
    </div>
    <div className='matched-profiles-container'>
     {profileList.map(function(profile) {
      if (isMatch(profile, hardProfile))
        return (
        <div key={profile._id} className='match-container hover:bg-sky-700' onClick={() => {handleProfileClick(profile._id); changeState('user')}}>
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