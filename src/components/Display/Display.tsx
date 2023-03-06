import React from 'react';

function Display() {
  return (
    <div
      className='max-w-[240px] h-[60px] p-[4px] rounded-[4px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
      draggable='true'>
      <input
        className='bg-[#F3F4F6] h-full w-full py-[4px] px-[8px] border-solid border-2 rounded-[6px] text-right'
        placeholder='0'></input>
    </div>
  );
}

export default Display;
