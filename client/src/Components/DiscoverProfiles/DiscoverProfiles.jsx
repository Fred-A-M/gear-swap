/* eslint-disable react/prop-types */
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';

export default function DiscoverProfiles ({profileList, handleProfileClick, changeState}) {


  return (
    <>
    <div className='font-bold underline text-center pb-4'>
      All Users
    </div>
    <div className="w-max mx-auto">
      <div className='discover-profiles-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 pb-11'>
      {profileList.map(function(profile) {
        return (
          <div key={profile._id} className='hover:cursor-pointer transition duration-300 hover:drop-shadow-2xl bg-orange-50 h-64 w-64 hover:bg-orange-100 rounded-2xl flex flex-col items-center drop-shadow-xl' onClick={() => {handleProfileClick(profile._id); changeState('user')}}>
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
    </>
  )
}