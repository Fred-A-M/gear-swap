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
        {newUsersRequests.length > 0 ? (
          <table className="table-auto border-collapse">
          <thead className=' bg-boxes'>
            <tr>
              <th className=" px-4 py-2 min-w-80 rounded-tl-2xl">User</th>
              <th className=" px-4 py-2 min-w-80 rounded-tr-2xl">Request Date</th>
            </tr>
          </thead>
          <tbody>
            {newUsersRequests.map(function(request, index) {
              const isLastRow = index === newUsersRequests.length - 1;
              return (
                <tr onClick={() => {handleProfileClick(request.senderId); changeState('user'); handleRequestClick(request._id); stopModal()}} key={request._id} className=' hover:cursor-pointer bg-profiles1 hover:bg-profiles2 text-center'>
                <td className={`${isLastRow ? 'rounded-bl-2xl' : ''} px-4 py-2 min-w-80 font-bold `}>{request.username}</td>
                <td className={`${isLastRow ? 'rounded-br-2xl' : ''} px-4 py-2 min-w-80`}>{moment(request.createdAt).format('MMMM Do YYYY - h:mma')}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
        ) : (
          <table className="table-auto border-collapse">
          <thead className=' bg-boxes'>
            <tr>
              <th className=" px-4 py-2 min-w-80 rounded-2xl text-background">No Requests to Display</th>
            </tr>
          </thead></table>
        )}
      </div>
    </div>
    </>
  )
}

