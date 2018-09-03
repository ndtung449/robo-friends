import React from 'react';

const SearchBox = ({ handleSearchChange }) => (
  <input
    className='pa3 ba b--green bg-lightest-blue'
    placeholder='filter by name'
    onChange={handleSearchChange}
  />
);

export default SearchBox;