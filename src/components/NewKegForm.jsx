import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props){
  let _names = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _pints = null;


  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({names: _names.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, pints: _pints.value});
    console.log(_names.value);
    console.log(_pints.value);
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
          <label htmlFor='names'>Name: </label>
          <input
            type='text'
            id='names'
            placeholder='name of flavor'
            className='form-control'
            ref={(input) => {_names = input;}} />
        </div>
        
        <div className='form-group'>
          <label htmlFor='brewer'>Brewer: </label>
          <input
            type='text'
            id='brewer'
            placeholder='brewer/brand'
            className='form-control'
            ref={(input) => {_brewer = input;}} />
        </div>

        <div className='form-group'>
          <label htmlFor='Description'>Description: </label>
          <textarea
            id='description'
            placeholder='style, flavors, scents, etc...'
            className='form-control'
            ref={(input) => {_description = input;}} />
        </div>

        <div className='form-group'>
          <label htmlFor='abv'>ABV%: </label>
          <input
            type='text'
            id='abv'
            placeholder='ABV%'
            className='form-control'
            ref={(input) => {_abv = input;}} />
        </div>

        <div className='form-group'>
          <label htmlFor='price'>Price: </label>
          <input
            type='text'
            id='price'
            placeholder='price/pint'
            className='form-control'
            ref={(input) => {_price = input;}} />
        </div>

        <div className='form-group'>
          <label htmlFor='pints'>Pints Available: </label>
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

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;