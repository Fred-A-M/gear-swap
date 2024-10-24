/* eslint-disable react/prop-types */
export default function ContactDetails ({selectedProfile}) {

  return (
    <>
    <table className="table-auto border-collapse mb-5">
      <thead>
        <tr className='bg-boxes text-center text-background'>
          <th className=" px-4 py-2 min-w-80 rounded-tl-2xl">Email</th>
          <th className=" px-4 py-2 min-w-80 rounded-tr-2xl">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-center'>
          <td className="bg-profiles2 rounded-bl-2xl px-4 py-2">{selectedProfile.email}</td>
          <td className="bg-profiles2 rounded-br-2xl px-4 py-2">{selectedProfile.number}</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}