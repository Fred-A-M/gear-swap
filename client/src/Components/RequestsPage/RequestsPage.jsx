/* eslint-disable react/prop-types */
import moment from 'moment';

export default function RequestsPage ({requestList, list, hardProfile, handleProfileClick, changeState, handleRequestClick, stopModal}) {

  const usersRequests = requestList.filter(request => {
    return request.receiverId === hardProfile._id && request.status === 'pending';
  })
  
  const newUsersRequests = usersRequests.map(request => {
    const foundUser = list.find((user) => user._id === request.senderId);
    return {
      ...request,
      username: foundUser.username
    }
  });

  return (
    <>
    <div className='flex justify-center'>
      <div>
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 min-w-80">User</th>
              <th className="border border-gray-300 px-4 py-2 min-w-80">Request Date</th>
            </tr>
          </thead>
          <tbody>
            {newUsersRequests.map(function(request) {
              return (
                <tr key={request._id}>
                <td onClick={() => {handleProfileClick(request.senderId); changeState('user'); handleRequestClick(request._id); stopModal()}} className="border border-gray-300 px-4 py-2 min-w-80 font-bold hover:cursor-pointer">{request.username}</td>
                <td className="border border-gray-300 px-4 py-2 min-w-80">{moment(request.createdAt).format('MMMM Do YYYY - h:mma')}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

