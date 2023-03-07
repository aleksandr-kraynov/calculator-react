import React, { useState } from 'react';
import Block from '../Block/Block';
import Button from '../Button/Button';
import Display from '../Display/Display';

const Number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ','];

function Layout() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  console.log(value, result);

  function summa() {
    setResult(`${value}+${result}`);
    setValue('');
  }

  function difference() {
    setResult(`${value}-${result}`);
    setValue('');
  }

  function multiplication() {
    setResult(`${value}*${result}`);
    setValue('');
  }

  function division() {
    setResult(`${value}/${result}`);
    setValue('');
  }

  function resultCalc() {
    setValue(eval(result + value));
    setResult('');
  }

  return (
    <>
      <div className='flex flex-col gap-[12px]'>
        <div
          className='max-w-[240px] h-[60px] p-[4px] rounded-[4px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
          draggable='true'>
          <input
            className='bg-[#F3F4F6] h-full w-full py-[4px] px-[8px] border-solid border-2 rounded-[6px] text-right'
            placeholder='0'
            value={value}
            onChange={e => setValue(e.target.value)}></input>
        </div>
        <div
          className='max-w-[240px] h-[56px] flex gap-[8px] p-[4px] rounded-[4px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
          draggable='true'>
          <button className='w-full h-full border-solid border-2 rounded-[6px]' onClick={() => division()}>
            /
          </button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]' onClick={() => multiplication()}>
            x
          </button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]' onClick={() => difference()}>
            -
          </button>
          <button className='w-full h-full border-solid border-2 rounded-[6px]' onClick={() => summa()}>
            +
          </button>
        </div>
        <div
          className='max-w-[240px] h-[224px] grid grid-cols-3 gap-[8px] p-[4px] rounded-[4px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
          draggable='true'>
          {Number.map(item => {
            // return <Button value={n.value} />;
            return (
              <button
                className={`w-full h-full border-solid border-2 rounded-[6px] ${item === 0 ? 'col-span-2' : ''}`}
                onClick={() => setValue(value + item)}
                key={item}>
                {item}
              </button>
            );
          })}
        </div>
        <div
          className='max-w-[240px] h-[72px] p-[4px] border-solid border-1 rounded-[4px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
          draggable='true'>
          <button
            className='w-full h-full border-solid border-2 rounded-[6px] w-full bg-[#5D5FEF] text-white'
            onClick={() => resultCalc()}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Layout;
