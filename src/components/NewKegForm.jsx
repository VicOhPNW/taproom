import React from 'react';

function NewKegForm(){
  let _names = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _pints = null;


  function handleNewKegFormSubmission() {
    event.preventDefault();
    _names.value = '';
    _brewer.value = '';
    _description.value = '';
    _abv.value = '';
    _price.value = '';
    _pints.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission} className='container'>
        <div className='form-group'>
          <label for='names'>Name: </label>
          <input
            type='text'
            id='names'
            placeholder='name of flavor'
            className='form-control'
            ref={(input) => {_names = input;}} />
        </div>
        
        <div className='form-group'>
          <label for='brewer'>Brewer: </label>
          <input
            type='text'
            id='brewer'
            placeholder='brewer/brand'
            className='form-control'
            ref={(input) => {_brewer = input;}} />
        </div>

        <div className='form-group'>
          <label for='Description'>Description: </label>
          <textarea
            id='description'
            placeholder='style, flavors, scents, etc...'
            className='form-control'
            ref={(input) => {_description = input;}} />
        </div>

        <div className='form-group'>
          <label for='abv'>ABV%: </label>
          <input
            type='text'
            id='abv'
            placeholder='ABV%'
            className='form-control'
            ref={(input) => {_abv = input;}} />
        </div>

        <div className='form-group'>
          <label for='price'>Price: </label>
          <input
            type='text'
            id='price'
            placeholder='price/pint'
            className='form-control'
            ref={(input) => {_price = input;}} />
        </div>

        <div className='form-group'>
          <label for='number'>Pints Available: </label>
          <input
            type='number'
            id='pints'
            placeholder='available pints'
            className='form-control'
            ref={(input) => {_pints = input;}} />
        </div>

        <button type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

export default NewKegForm;