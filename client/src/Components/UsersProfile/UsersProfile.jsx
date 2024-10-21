/* eslint-disable react/prop-types */
import UserGearList from './UserGearList'
import UserWishList from './UserWishList'

export default function UsersProfile ({hardProfile, handleModal, fetchProfiles, changeProfile}) {

  return (
    <>
    <div className='user-profile-container flex mt-6'>
      <div className='user-gear-container flex-1 m-3 flex flex-col items-center'>
        <UserGearList hardProfile={hardProfile} fetchProfiles={fetchProfiles} changeProfile={changeProfile} />
        <button onClick={() => handleModal('newGear')} className="text-background font-bold bg-buttons hover:bg-buttonshover rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Add new owned gear</button>
      </div>
      <div className='user-wishlist-container flex-1 m-3 flex flex-col items-center'>
        <UserWishList hardProfile={hardProfile} fetchProfiles={fetchProfiles} changeProfile={changeProfile} />
        <button onClick={() => handleModal('newWish')} className="text-background bg-buttons hover:bg-buttonshover font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Add new wish-list item</button>
      </div>
    </div>
    </>
  )
}