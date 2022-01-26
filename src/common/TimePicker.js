import React, { useState } from 'react';

import { ReactComponent as Up } from '../asset/svg/Increase.svg';
import { ReactComponent as Down } from '../asset/svg/Decrease.svg';

const TimePicker = () => {
  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(0);
  return (
    <>
      <div className='flex place-items-center gap-4'>
        <div className='text-center mt-3 w-4'>
          {hour < 10 ? '0' + hour : hour}
        </div>
        <div className='flex flex-col place-items-center'>
          <button
            onClick={() => {
              hour === 23 ? setHour(1) : setHour(hour + 1);
            }}
          >
            <Up />
          </button>
          <button
            onClick={() => {
              hour === 1 ? setHour(23) : setHour(hour - 1);
            }}
          >
            <Down />
          </button>
        </div>
        <span className='mt-2'>:</span>
        <div className='text-center mt-3 w-4'>
          {minute < 10 ? '0' + minute : minute}
        </div>
        <div className='flex flex-col place-items-center'>
          <button
            onClick={() => {
              minute === 59 ? setMinute(0) : setMinute(minute + 1);
            }}
          >
            <Up />
          </button>
          <button
            onClick={() => {
              minute === 0 ? setMinute(59) : setMinute(minute - 1);
            }}
          >
            <Down />
          </button>
        </div>
      </div>
    </>
  );
};

export default TimePicker;
