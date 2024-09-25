/* eslint-disable react/prop-types */
import { rejectRequest } from '../../tools';

export default function FriendsPage ({requestList, list, hardProfile, handleProfileClick, changeState, fetchRequests}) {

  const usersRequests = requestList.filter(request => {
    return request.receiverId === hardProfile._id && request.status === 'accepted';
  })

  const friends = usersRequests.map(request => {
    const foundUser = list.find((user) => user._id === request.senderId);
    console.log(foundUser);
    return {
      ...request,
      username: foundUser.username,
      email: foundUser.email,
      number: foundUser.number
    }
  });

  async function rejectButton (id) {
    await rejectRequest(id);
    fetchRequests();
  }

  return (
    <>
    <div className='flex justify-center mt-8'>
      {friends.length === 0 ? <table className="table-auto w-4/5 min-w-80 h-24 transition duration-300 mb-8 drop-shadow-2xl p-6 rounded-2xl">
          <thead>
            <tr className='bg-orange-300'>
              <th className=" px-4 py-2 min-w-80 rounded-2xl text-white">No Contacts Yet</th>
            </tr></thead></table> :
      <div>
        <table className="table-auto w-4/5 min-w-80 transition duration-300 mb-8 drop-shadow-2xl p-6 h-max rounded-2xl">
          <thead>
            <tr className='bg-orange-300'>
              <th className=" px-4 py-2 min-w-80 rounded-tl-2xl">User</th>
              <th className=" px-4 py-2 min-w-80">Email</th>
              <th className=" px-4 py-2 min-w-80">Number</th>
              <th className=" px-4 py-2 rounded-tr-2xl">Remove Friend?</th>
            </tr>
          </thead>
          <tbody>
            {friends.map(function(friend, index) {
              const isLastRow = index === friends.length - 1;
              return (
                <tr key={friend._id} onClick={() => {handleProfileClick(friend.senderId); changeState('user');}} className='hover:cursor-pointer text-center bg-orange-50 hover:bg-orange-100'>
                  <td  className={`px-4 py-2 font-bold ${isLastRow ? 'rounded-bl-2xl' : ''}`}>{friend.username}</td>
                  <td className=" px-4 py-2">{friend.email}</td>
                  <td className=" px-4 py-2">{friend.number}</td>
                  <td  className={` ${isLastRow ? 'rounded-br-2xl' : ''}`}>
                    <button onClick={(e) => {e.stopPropagation(); rejectButton(friend._id) }} className="text-white bg-base hover:bg-basehover font-medium rounded-lg text-sm px-5 py-2.5 w-full">Remove</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      }
    </div>
    </>
  )
}

