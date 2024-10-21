/* eslint-disable react/prop-types */
export default function LoginPage ({changeState}) {

  return (
    <>
    <div className='flex justify-center items-center h-lvh'>
      <div className='min-h-custom-min w-96 bg-boxes rounded-2xl flex flex-col items-center drop-shadow-2xl transition duration-300'>
        <div>
          <img className='rounded-full h-56 mt-5' src="/src/assets/logo2.jpeg" alt="" />
        </div>
        <div>
        <input className="shadow mt-7 appearance-none bg-background rounded-xl w-full py-2 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline" placeholder="Username" required/>
        </div>
        <div>
        <input type='password' className="shadow mt-7 appearance-none bg-background rounded-xl w-full py-2 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" required/>
        </div>
        <div>
        <button onClick={() => changeState('home')} className=" bg-buttons hover:bg-buttonshover text-background font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-7" type="submit">Log in</button>
        </div>
      </div>
    </div>
    </>
  )
}