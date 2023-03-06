import React from 'react';

function Button({ value }) {
  return (
    <button className={`w-full h-full border-solid border-2 rounded-[6px] ${value === '0' ? 'col-span-2' : ''}`}>
      {value}
    </button>
  );
}

export default Button;
