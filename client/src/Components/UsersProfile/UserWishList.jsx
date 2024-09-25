/* eslint-disable react/prop-types */
export default function UserGearList ({hardProfile, fetchProfiles, changeProfile}) {

  async function deleteWishDB (id, gearId) {
    await fetch(`http://localhost:3000/profiles/${id}/wishlist/delete`, {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json'
       },
      body: JSON.stringify({gearId}),
    })
};

function deleteWishMock (gearId) {
  const gearToDelete = hardProfile.wishlist.findIndex(gear => gear._id === gearId);
  changeProfile((previousProfile) => ({
    ...previousProfile,
    wishlist: [
      ...previousProfile.wishlist.slice(0, gearToDelete),
      ...previousProfile.wishlist.slice(gearToDelete + 1)
    ]
  }));
}

function mockDelete (gearId) {
  deleteWishMock(gearId);
}
//had to implement this where i delete from wishlist on DB using 'model' instead of id as trouble syncing the Mock and DB profile.
//should both just be using the above function and deleting by id, but not got time to change type of database now and adding to wishlist via
//heart icon was last min decision (that screwed me over)
async function wishDelete (gearId) {
  await deleteWishDB(hardProfile._id, gearId);
  fetchProfiles();
}

  return (
    <>
    <div className='user-gear-list w-4/5 min-w-80 transition duration-300 bg-orange-50 hover:bg-orange-100 rounded-2xl mb-8 drop-shadow-2xl p-6 max-h-custom-max overflow-y-scroll min-h-custom-min'>
       <ul role="list" className="divide-y divide-gray-100">
       <li className="bg-orange-400 rounded-tl-2xl rounded-tr-2xl -mx-6 -mt-6 px-4 py-3 font-bold text-white">
          <div className="flex justify-center">
            <span>Wishlist</span>
          </div>
        </li>
         {hardProfile.wishlist.map((gear) => (
           <li key={gear.instrument} className="flex justify-between gap-x-6 py-5">
             <div className="flex min-w-0 gap-x-4 ">
               {!gear.imageURL ? <img src='/src/assets/logo2.jpeg' className="w-12 h-12 rounded-full shadow-md"/> : 
               <img alt="" src={gear.imageURL} className="h-12 w-12 flex-none rounded-full bg-gray-50 self-center" />
               }
               <div className="min-w-0 flex-auto">
                 <p className="text-sm font-semibold leading-6 text-gray-900">{gear.make}</p>
                 <p className="text-sm font-semibold leading-6 text-gray-500">{gear.model}</p>
                 <p className="text-sm leading-6 text-gray-900">{gear.instrument}</p>
               </div>
             </div>
             <div onClick={() => {wishDelete(gear.model); mockDelete(gear._id)}} className="hidden shrink-0 sm:flex sm:flex-col sm:items-end self-center hover:cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                 <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
               </svg>
             </div>
           </li>
         ))}
       </ul>
     </div>
   </>
  )
}