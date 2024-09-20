/* eslint-disable react/prop-types */
export default function UserGearList ({hardProfile}) {


  return (
    <>
     <div className='user-gear-list'>
        <ul role="list" className="divide-y divide-gray-100">
          {hardProfile.wishlist.map((gear) => (
            <li key={gear.instrument} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img alt="" src={gear.imageURL} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{gear.make}</p>
                  <p className="text-sm font-semibold leading-6 text-gray-500">{gear.model}</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{gear.instrument}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}