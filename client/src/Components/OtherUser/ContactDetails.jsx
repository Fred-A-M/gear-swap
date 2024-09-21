/* eslint-disable react/prop-types */
export default function ContactDetails ({selectedProfile}) {

  return (
    <>
    <table className="table-auto border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2 min-w-80">Email</th>
          <th className="border border-gray-300 px-4 py-2 min-w-80">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">{selectedProfile.email}</td>
          <td className="border border-gray-300 px-4 py-2">{selectedProfile.number}</td>
        </tr>
        
      </tbody>
    </table>
    </>
  )
}