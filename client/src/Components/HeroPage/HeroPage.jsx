/* eslint-disable react/prop-types */
export default function HeroPage ({changeState}) {

  return (
    <>
    <div className='flex flex-col justify-center items-center h-lvh'>
    <div>
      <img className='drop-bounce' src="/src/assets/biglogo.png" alt="" />
    </div>
      <div className='flex items-center gap-9 transition duration-300'>
        <div>
        <button onClick={() => changeState('login')} className=" bg-buttons hover:bg-buttonshover text-background text-2xl h-20 w-56 font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-7" type="submit">Create Account</button>
        </div>
        <div>
        <button onClick={() => changeState('login')} className=" bg-buttons hover:bg-buttonshover text-background text-2xl h-20 w-56 font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-7" type="submit">Log In</button>
        </div>
      </div>
    </div>
    </>
  )
}