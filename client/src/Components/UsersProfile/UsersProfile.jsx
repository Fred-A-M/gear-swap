/* eslint-disable react/prop-types */
import UserGearList from './UserGearList'
import UserWishList from './UserWishList'

export default function UsersProfile ({hardProfile, handleModal}) {

  return (
    <>
    <div className='user-profile-container flex h-full'>
      <div className='user-gear-container flex-1 m-3 flex flex-col items-center'>
        <UserGearList hardProfile={hardProfile} />
        <button onClick={() => handleModal('newGear')} className="text-white bg-base hover:bg-basehover font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Add new owned gear</button>
      </div>
      <div className='user-wishlist-container flex-1 m-3 flex flex-col items-center'>
        <UserWishList hardProfile={hardProfile}/>
        <button onClick={() => handleModal('newWish')} className="text-white bg-base hover:bg-basehover font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Add new wish-list item</button>
      </div>
    </div>
    </>
  )
}