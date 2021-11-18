import React from 'react';

const Country = ({ name, flag }) => {
  return (
    <div>
      <img src={flag} alt={name} style={{ maxWidth: 150 }}/>
      <p>{name}</p>
    </div>
  )
}

export default Country;