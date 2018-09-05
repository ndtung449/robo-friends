import React from 'react';

const SearchBox = ({ handleSearchChange }) => (
  <input
    aria-label='Search Robot'
    className='pa3 ba b--green bg-lightest-blue'
    placeholder='filter by name'
    onChange={handleSearchChange}
  />
);

export default SearchBox;