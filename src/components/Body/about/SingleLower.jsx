import React from 'react';

const SingleLower = ({logo, number, para}) => {
  return (
    <div className='lowerSingle'>
        <img src={require(`../images/${logo}.svg`)} alt={logo} />
        <h4>{number?number:null}</h4>
        <p>{para?para:null}</p>
    </div>
  )
}

export default SingleLower