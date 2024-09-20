/* eslint-disable react/prop-types */
import { useState } from 'react'
import './NewGearForm.css'

export default function NewGearForm ({changeState, state, changeProfile, hardProfile, fetchProfiles}) {
  const [instrumentValue, setInstrumentValue] = useState('');
  const [makeValue, setMakeValue] = useState('');
  const [modelValue, setModelValue] = useState('');
  

  function handleInstrumentChange (event) {
    setInstrumentValue(event.target.value);
  }
  function handleMakeChange (event) {
    setMakeValue(event.target.value);
  }
  function handleModelChange (event) {
    setModelValue(event.target.value);
  }

  function createNewGear (instrument, make, model) {
   const newGear = {
    instrument: instrument,
    make: make,
    model: model
   };
   if (state === 'newGear') {
     changeProfile((previousProfile) => ({
      ...previousProfile,
      gear: [...previousProfile.gear, newGear]
    }));
   }
   if (state === 'newWish') {
    changeProfile((previousProfile) => ({
      ...previousProfile,
      wishlist: [...previousProfile.wishlist, newGear]
    }));
   }
  }

  async function createNewGearDB (id, instrument, make, model) {
    if (state === 'newGear') {
      await fetch(`http://localhost:3000/profiles/${id}/gear`, {
         method: 'PUT',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({gear: {instrument, make, model}}),
       })
    }
    if (state === 'newWish') {
      await fetch(`http://localhost:3000/profiles/${id}/wishlist`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({wishlist: {instrument, make, model}}),
      })
    }
   }

  async function formSubmission (event) {
      event.preventDefault();
      createNewGear(instrumentValue, makeValue, modelValue);
      await createNewGearDB(hardProfile._id, instrumentValue, makeValue, modelValue);
      setInstrumentValue('');
      setMakeValue('');
      setModelValue('');
      changeState('profile');
      fetchProfiles();
  }

  return (
    <>
    <div className="w-full max-w-xs">
      <form onSubmit={formSubmission} className="bg-white shadow-md rounded px-8 pt-8 pb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-4" >
            Instrument
          </label>
          <input onChange={handleInstrumentChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Type of equpiment" required/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-4" >
            Make
          </label>
          <input onChange={handleMakeChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type make here..." required/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-4">
            Model
          </label>
          <input onChange={handleModelChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type model here..." required/>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add Gear
          </button>
        </div>
      </form>
    </div>
      </>
    )
  }

