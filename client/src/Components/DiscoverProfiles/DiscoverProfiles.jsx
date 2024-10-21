/* eslint-disable react/prop-types */
import PhotoCarouselDiscover from './PhotoCarouselDiscover';

export default function DiscoverProfiles ({profileList, handleProfileClick, changeState, locationFilter}) {

  const locationProfiles = profileList.filter(profile => {
    return locationFilter ? profile.location === locationFilter : true;
  });

  return (
    <>
    <div className='w-full flex justify-center'>
      <div className='font-bold text-background text-center justify-center p-1 bg-boxes rounded-2xl w-52 mb-4'>
        All Users
      </div>
    </div>
    <div className="w-max mx-auto">
      <div className='discover-profiles-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 pb-11'>
      {locationProfiles.map(function(profile) {
        return (
          <div key={profile._id} className='hover:cursor-pointer transition duration-300 hover:drop-shadow-2xl bg-profiles1 text-boxes h-64 w-64 hover:bg-profiles2 rounded-2xl flex flex-col items-center drop-shadow-xl' onClick={() => {handleProfileClick(profile._id); changeState('user')}}>
            <div className='font-bold text-xl mt-2'>
                {profile.username}
            </div> 
            <div className='profile-gear-list self-center mt-3'>
                <PhotoCarouselDiscover usersGear={profile.gear}/>
              </div>
              <div className='text-xs font-bold mt-2'>
                {profile.location}
              </div>
            </div>
        )
      })
      }
      </div>
    </div>
    </>
  )
}