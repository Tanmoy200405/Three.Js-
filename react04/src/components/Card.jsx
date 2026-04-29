import React from 'react';

const card = ({cardName,cardAge,cardJob}) => {
  return (
    <div>
      <div>Name: {cardName}</div>
      <div>Age: {cardAge}</div>
      <div>Job: {cardJob}</div>
    </div>
  );
}

export default card;
