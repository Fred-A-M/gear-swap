/* eslint-disable react/prop-types */
import { useState } from 'react'
import './NewGearForm.css'

export default function NewGearForm ({changeState, changeGearList, hardGearList, changeWishList, hardWishList, state}) {
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
   const gear = [{
    instrument: instrument,
    make: make,
    model: model
   }];
   if (state === 'newGear') {
     changeGearList(hardGearList.concat(gear));
   }
   if (state === 'newWish') {
     changeWishList(hardWishList.concat(gear));
   }
  }

  function formSubmission (event) {
    event.preventDefault();
    createNewGear(instrumentValue, makeValue, modelValue);
    setInstrumentValue('');
    setMakeValue('');
    setModelValue('');
    changeState('profile');
  }

  return (
    <>
    <div className='container'>
      <h2>Add new gear</h2>
      <form id='form' onSubmit={formSubmission}>
        INSTRUMENT <br />
        <input type="text" className='input-field' value={instrumentValue} onChange={handleInstrumentChange} autoComplete='off' placeholder='Insert type of equipment...'/> <br />
        MAKE <br />
        <input type="text" className='input-field' value={makeValue} onChange={handleMakeChange} autoComplete='off' placeholder='Insert make...'/> <br />
        MODEL <br />
        <input type="text" className='input-field' value={modelValue} onChange={handleModelChange} autoComplete='off' placeholder='Insert model...'/> <br />
        <input type='submit' id='input-button' value='Create'/>
      </form>
    </div>
    </>
  )
}