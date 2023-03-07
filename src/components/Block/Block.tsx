import React, { Children } from 'react';

function Block() {
  return (
    <div
      className='max-w-[240px] h-[56px] flex gap-[8px] p-[4px] rounded-[4px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
      draggable='true'></div>
  );
}

export default Block;
