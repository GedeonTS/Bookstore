import React from 'react';

function Inputs(props) {
  return (
    <input className={props.className} type="text" name={props.name} placeholder={props.placeholder} onChange={props.function} />
  );
}

export default Inputs;
