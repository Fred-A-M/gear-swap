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
    <div>
    {matchedProfiles.length === 0 ? (
      <div className='w-full flex justify-center'>
        <div className='font-bold text-xl text-background text-center justify-center p-3 bg-boxes rounded-2xl w-auto mt-6 mb-4'>
          No Matches in Your Chosen Location
        </div>
      </div>
        ) : (
          <>
          <div className='w-full flex justify-center'>
            <div className='font-bold text-background text-center justify-center p-1 bg-boxes rounded-2xl w-52 mt-6 mb-4'>
              Matched Users
            </div>
          </div>
          <div className="w-max mx-auto">
            <div className={`matched-profiles-container grid grid-cols-1 sm:grid-cols-${matchedProfiles.length >= 2 ? 2 : 1} md:grid-cols-${matchedProfiles.length >= 3 ? 3 : matchedProfiles.length} lg:grid-cols-${matchedProfiles.length >= 4 ? 4 : matchedProfiles.length} justify-center gap-8 pb-11`}>
                {matchedProfiles.map(function(profile) {
                  return (
                    <div key={profile._id} className='hover:cursor-pointer transition duration-300 hover:drop-shadow-2xl bg-profiles2 text-buttons hover:bg-profiles1 h-52 w-52  rounded-2xl flex flex-col items-center drop-shadow-xl' onClick={() => {handleProfileClick(profile._id); changeState('user')}}>
                      <div className='font-bold text-xl mt-1'>
                          {profile.username}
                      </div>
                      <div className='profile-gear-list self-center mt-2 mb-2'>
                          <PhotoCarousel usersGear={profile.gear}/>
                      </div>
                      <div className='font-bold text-xs'>
                        {profile.location}
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