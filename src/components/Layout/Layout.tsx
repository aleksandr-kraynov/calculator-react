import React, { useRef, useState } from 'react';
import Block from '../Block/Block';
import Button from '../Button/Button';
import Display from '../Display/Display';

const Number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ','];

function Layout() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const ref = useRef('')

  console.log(value, result)

  function summa() {
    setResult(`${value}+${result}`);
    ref.current = '+'
  }

  function difference() {
    setResult(`${value}-${result}`);
    ref.current = '-'
  }

  function multiplication() {
    setResult(`${value}*${result}`);
    ref.current = '*'
  }

  function division() {
    setResult(`${value}/${result}`);
    ref.current = '/'
  }

  function resultCalc() {
    setValue(eval(result + value));
    setResult('')
  }

  const operands = [
    {key: '/', callback: division},
    {key: 'x', callback: multiplication},
    {key: '-', callback: difference},
    {key: '+', callback: summa},
  ]

  const onChange = (item) => {
    if(ref.current) {
      setValue('')
    }
    setValue(prev=> prev + item)
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
          draggable='true'
        >
          {operands.map(operand => {
            return (
              <button className='w-full h-full border-solid border-2 rounded-[6px]' key={operand.key} onClick={operand.callback}>
                {operand.key}
              </button>
            )
            })
          }
        </div>
        <div
          className='max-w-[240px] h-[224px] grid grid-cols-3 gap-[8px] p-[4px] rounded-[4px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
          draggable='true'>
          {Number.map(item => {
            // return <Button value={n.value} />;
            return (
              <button
                className={`w-full h-full border-solid border-2 rounded-[6px] ${item === 0 ? 'col-span-2' : ''}`}
                onClick={() => onChange(item)}
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
