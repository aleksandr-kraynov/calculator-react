import React from 'react';
import Block from '../Block/Block';
import Button from '../Button/Button';
import Display from '../Display/Display';

const Signs = [{ value: '/' }, { value: 'x' }, { value: '-' }, { value: '+' }];
const Number = [
  { value: '7' },
  { value: '8' },
  { value: '9' },
  { value: '4' },
  { value: '5' },
  { value: '6' },
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '0' },
  { value: ',' },
];

function Layout() {
  return (
    <>
      <div className='flex flex-col gap-[12px]'>
        <Display />
        <Block>
          {Signs.map(v => {
            return <Button value={v.value} />;
          })}
        </Block>
        <div
          className='max-w-[240px] h-[224px] grid grid-cols-3 gap-[8px] p-[4px] rounded-[4px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
          draggable='true'>
          {Number.map(n => {
            return <Button value={n.value} />;
          })}
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
