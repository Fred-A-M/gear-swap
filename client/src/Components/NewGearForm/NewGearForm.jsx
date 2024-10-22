/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createNewGearDB, createNewWishDB } from '../../tools';

export default function NewGearForm ({changeProfile, hardProfile, fetchProfiles, stopModal, modalContent}) {
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
   if (modalContent === 'newGear') {
     changeProfile((previousProfile) => ({
      ...previousProfile,
      gear: [...previousProfile.gear, newGear]
    }));
   }
   if (modalContent === 'newWish') {
    changeProfile((previousProfile) => ({
      ...previousProfile,
      wishlist: [...previousProfile.wishlist, newGear]
    }));
   }
  }

  async function createDB (id, instrument, make, model) {
    if (modalContent === 'newGear') {
      await createNewGearDB(id, instrument, make, model);
    }
    if (modalContent === 'newWish') {
      await createNewWishDB(id, instrument, make, model);
    }
   }

  async function formSubmission (event) {
      event.preventDefault();
      createNewGear(instrumentValue, makeValue, modelValue);
      await createDB(hardProfile._id, instrumentValue, makeValue, modelValue);
      setInstrumentValue('');
      setMakeValue('');
      setModelValue('');
      fetchProfiles();
      stopModal();
  }

  return (
    <>
    <div className="w-full max-w-xs">
      <form onSubmit={formSubmission} className="bg-boxes shadow-md rounded-2xl px-8 pt-8 pb-8 text-center">
        <div className="mb-4">
          <label className="block text-background text-sm font-bold mb-4" >
            Instrument
          </label>
          <input onChange={handleInstrumentChange} className="shadow bg-background appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Type of equpiment" required/>
        </div>
        <div className="mb-4">
          <label className="block text-background text-sm font-bold mb-4" >
            Make
          </label>
          <input onChange={handleMakeChange} className="shadow bg-background appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter make..." required/>
        </div>
        <div className="mb-4">
          <label className="block text-background text-sm font-bold mb-4">
            Model
          </label>
          <input onChange={handleModelChange} className="shadow bg-background appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter model..." required/>
        </div>
        <div>
          <button className="bg-base hover:basehover text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" type="submit">
            Add Gear
          </button>
        </div>
      </form>
    </div>
      </>
    )
  }

