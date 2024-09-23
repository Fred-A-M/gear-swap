/* eslint-disable react/prop-types */
export default function GearList ({selectedProfile}) {


  return (
    <>
     <div className='user-gear-list w-4/5 min-w-80 transition duration-300 bg-orange-50 hover:bg-orange-100 rounded-2xl mb-8 drop-shadow-2xl p-6 h-max'>
        <ul role="list" className="divide-y divide-gray-100">
          {selectedProfile.gear.map((gear) => (
            <li key={gear.instrument} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4 ">
                {!gear.imageURL ? <img src='/src/assets/logo2.jpeg' className="w-12 h-12 rounded-full shadow-md"/> : 
                <img alt="" src={gear.imageURL} className="h-12 w-12 flex-none rounded-full bg-gray-50 self-center" />
                }
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{gear.make}</p>
                  <p className="text-sm font-semibold leading-6 text-gray-500">{gear.model}</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end self-center">
                <p className="text-sm leading-6 text-gray-900">{gear.instrument}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}