/* eslint-disable react/prop-types */
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';

export default function MatchedProfiles ({profileList, hardProfile, changeState, handleProfileClick, locationFilter,}) {

  function isMatch (otherUser, user) {
    return otherUser.gear.some(gearItem => {
      return user.wishlist.some(wishItem => {
        if (gearItem.make === wishItem.make &&
        gearItem.model === wishItem.model)
        return true;
      });
    });
  }

  const matchedProfiles = profileList.filter(profile => {
    const matchesGear = isMatch(profile, hardProfile);
    const matchesLocation = locationFilter ? profile.location === locationFilter : true;
    return matchesGear && matchesLocation;
  });


  return (
    <>
    <div className=''>
    {matchedProfiles.length === 0 ? (
          <div className='text-center font-bold'>No Matches to Display</div>
        ) : (
          <>
          <div className='font-bold underline text-center pb-4'>
            Matched Users
          </div>
          <div className="w-max mx-auto">
          <div className={`matched-profiles-container grid grid-cols-1 sm:grid-cols-${matchedProfiles.length >= 2 ? 2 : 1} md:grid-cols-${matchedProfiles.length >= 3 ? 3 : matchedProfiles.length} lg:grid-cols-${matchedProfiles.length >= 4 ? 4 : matchedProfiles.length} justify-center gap-8 pb-11`}>
              {matchedProfiles.map(function(profile) {
                return (
                  <div key={profile._id} className='hover:cursor-pointer transition duration-300 hover:drop-shadow-2xl bg-orange-50 h-64 w-64 hover:bg-orange-100 rounded-2xl flex flex-col items-center drop-shadow-xl' onClick={() => {handleProfileClick(profile._id); changeState('user')}}>
                    <div className='profile-username'>
                        {profile.username}
                    </div> <br />
                    <div className='profile-gear-list self-center'>
                        <PhotoCarousel usersGear={profile.gear}/>
                      </div>
                    </div>
                )
              })}
            </div>
          </div>
          </>
      )}
    </div>
    </>
  )
}