/* eslint-disable react/prop-types */
import './MatchedProfiles.css'

export default function MatchedProfiles ({profileList, hardWishList, changeState, handleProfileClick}) {

  function isMatch (user, wish) {
    return user.gear.some(gearItem => {
      return wish.some(wishItem => {
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
      if (isMatch(profile, hardWishList))
        return (
        <div key={profile._id} className='match-container' onClick={() => {handleProfileClick(profile._id); changeState('user')}}>
          <div className='profile-username'>
            <h3>
              {profile.username}
            </h3>
          </div>
           <div className='profile-gear-list'>
              {profile.gear.map(function(gear) {
                return (
                  <div key={gear._id}>
                    {gear.make} {gear.model} <br /> <br />
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