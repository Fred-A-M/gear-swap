/* eslint-disable react/prop-types */
export default function LoginPage ({changeState}) {

  return (
    <>
    <div className='flex flex-col justify-center items-center h-lvh'>
      <div className=' flex flex-col items-center transition duration-300'>
        <div>
          <img className='h-56 mt-5 border-8 hover:cursor-pointer border-boxes rounded-full' src="/src/assets/logo2.png" alt="" onClick={() => changeState('hero')} />
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