/* eslint-disable react/prop-types */
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';

export default function MatchedProfiles ({profileList, hardProfile, changeState, handleProfileClick}) {

  function isMatch (user, wish) {
    return user.gear.some(gearItem => {
      return wish.wishlist.some(wishItem => {
        if (gearItem.make === wishItem.make &&
        gearItem.model === wishItem.model)
        return true;
      });
    });
  }


  return (
    <>
    <div className=''>
      <div className='font-bold underline text-center pb-4'>
        Matched Users
      </div>
      <div className="w-max mx-auto">
        <div className='matched-profiles-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-11'>
        {profileList.map(function(profile) {
          if (isMatch(profile, hardProfile))
            return (
            <div key={profile._id} className='hover:cursor-pointer transition duration-300 bg-orange-50 h-64 w-64 hover:bg-orange-100 hover:drop-shadow-2xl rounded-2xl flex flex-col items-center drop-shadow-xl' onClick={() => {handleProfileClick(profile._id); changeState('user')}}>
              <div className='profile-username'>
                  {profile.username}
              </div> <br />
              <div className='profile-gear-list self-center'>
                  <PhotoCarousel usersPhotos={profile.gear}/>
                </div>
              </div>
          )
        })
        }
        </div>
      </div>
    </div>
    </>
  )
}