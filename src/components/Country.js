import React from 'react';

const Country = ({ name, flag }) => {
  return (
    <div>
      <img src={flag} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Country;