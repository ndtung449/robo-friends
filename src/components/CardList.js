import React from 'react';
import Card from './Card';

const CardList = ({robos}) => {
  return (
    <div>
      {
        robos.map(robo => <Card key={robo.id} id={robo.id} name={robo.name} email={robo.email} />)
      }
    </div>
  );
}

export default CardList;