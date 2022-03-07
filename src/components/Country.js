import React from 'react';

const Country = ({ name, flag }) => {
  return (
    <div className="country">
      <img src={flag} alt={'flag of ' + name + '.'} />
      <p>{name}</p>
    </div>
  )
}

export default Country;