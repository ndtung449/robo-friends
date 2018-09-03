import React from 'react';

const Scroll = ({children}) => (
  <div style={{overflowY: 'scroll', border: '3px solid black', height: '800px', marginTop: '20px'}}>
    {children}
  </div>
);

export default Scroll;