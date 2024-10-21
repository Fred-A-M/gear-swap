/* eslint-disable react/prop-types */
import { HiTrash } from "react-icons/hi2";
export default function UserGearList ({hardProfile, fetchProfiles, changeProfile}) {

async function deleteGearDB (id, gearId) {
    await fetch(`http://localhost:3000/profiles/${id}/gear/delete`, {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json'
       },
      body: JSON.stringify({gearId}),
    })
};

function deleteGearMock (gearId) {
  const gearToDelete = hardProfile.gear.findIndex(gear => gear._id === gearId);
    changeProfile((previousProfile) => ({
     ...previousProfile,
     gear: [
      ...previousProfile.gear.slice(0, gearToDelete),
      ...previousProfile.gear.slice(gearToDelete + 1)
    ]
  }));
}

async function gearDelete (gearId) {
  await deleteGearDB(hardProfile._id, gearId);
  deleteGearMock(gearId);
  fetchProfiles();
}


  return (
    <>
    <div className='user-gear-list w-4/5 min-w-80 transition duration-300 bg-profiles1 hover:bg-profiles2 rounded-2xl mb-8 drop-shadow-2xl p-6 max-h-custom-max min-h-custom-min'>
      <ul role="list" className="divide-y divide-gray-100">
        <li className="bg-boxes rounded-tl-2xl rounded-tr-2xl -mx-6 -mt-6 px-4 py-3 font-bold text-background">
          <div className="flex justify-center">
            <span>Available Gear</span>
          </div>
        </li>

        {hardProfile.gear.map((gear) => (
          <li key={gear.instrument} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              {/* Display Gear Image */}
              {!gear.imageURL ? (
                <img src='/src/assets/logo2.jpeg' className="w-12 h-12 rounded-full shadow-md" />
              ) : (
                <img alt="" src={gear.imageURL} className="h-12 w-12 flex-none rounded-full bg-gray-50 self-center" />
              )}
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{gear.make}</p>
                <p className="text-sm font-semibold leading-6 text-gray-500">{gear.model}</p>
                <p className="text-sm leading-6 text-gray-900">{gear.instrument}</p>
              </div>
            </div>
            
            <div onClick={() => gearDelete(gear._id)} className="hidden shrink-0 sm:flex sm:flex-col sm:items-end self-center hover:cursor-pointer">
              <HiTrash size={28}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}