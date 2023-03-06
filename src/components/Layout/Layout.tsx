import React from 'react';

function Layout() {
  return (
    <>
      <div className='flex flex-col gap-[12px]'>
        <div
          className='max-w-[240px] h-[60px] p-[4px] rounded-[4px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
          draggable='true'>
          <input
            className='bg-[#F3F4F6] h-full w-full py-[4px] px-[8px] border-solid border-2 rounded-[6px] text-right'
            placeholder='0'></input>
        </div>
        <div
          className='max-w-[240px] h-[56px] flex gap-[8px] p-[4px] rounded-[4px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
          draggable='true'>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>/</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>x</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>-</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>+</button>
        </div>
        <div
          className='max-w-[240px] h-[224px] grid grid-cols-3 gap-[8px] p-[4px] rounded-[4px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
          draggable='true'>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>7</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>8</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>9</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>4</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>5</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>6</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>1</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>2</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>3</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px] col-span-2'>0</button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]'>,</button>
        </div>
        <div
          className='max-w-[240px] h-[72px] p-[4px] border-solid border-1 rounded-[4px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
          draggable='true'>
          <button className='w-full h-full border-solid border-2 rounded-[6px] w-full bg-[#5D5FEF] text-white'>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Layout;
