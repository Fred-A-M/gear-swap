/* eslint-disable react/prop-types */
export default function LoginPage ({changeState}) {

  return (
    <>
    <div className='bg-yellow-50 flex justify-center items-center h-lvh'>
      <div className='min-h-custom-min w-96 bg-base rounded-2xl flex flex-col items-center hover:drop-shadow-2xl transition duration-300'>
        <div>
          <img className='rounded-full h-56 mt-5' src="/src/assets/logo2.jpeg" alt="" />
        </div>
        <div>
        <input className="shadow mt-7 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline" placeholder="Username" required/>
        </div>
        <div>
        <input type='password' className="shadow mt-7 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" required/>
        </div>
        <div>
        <button onClick={() => changeState('home')} className="border-white border-4 bg-basehover hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-7" type="submit">Log in</button>
        </div>
      </div>
    </div>
    </>
  )
}