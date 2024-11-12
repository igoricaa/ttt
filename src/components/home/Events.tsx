'use client';

import { Event, events } from '@/data/data';
import LocationIcon from '../icons/LocationIcon';
import { Calendar } from '../ui/calendar';
import { useState, useEffect } from 'react';

const Events = () => {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <section className='px-side max-w-8xl mx-auto pt-40 pb-20'>
      <h2 className='text-6xl font-semibold uppercase text-center'>
        Upcoming Events
      </h2>
      <div className='grid grid-cols-12 gap-x-4 mt-12'>
        <div className='col-span-5 pr-20'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            className='rounded-md border'
          />
        </div>
        <div className='col-span-7'>
          {events.map((event: Event, index: number) => (
            <div
              key={index}
              className='p-4 border-b border-[#EBE9E9] flex justify-between'
            >
              <div className='flex items-center gap-x-4'>
                <div className='w-[60px] h-[60px]'>
                  <span className='text-2xl font-medium text-[#30321C] bg-white w-full h-[38px] flex items-center justify-center rounded-t-[4px]'>
                    {event.date.day}
                  </span>
                  <span className='text-sm w-full h-[22px] bg-[#4A4B2F] flex items-center justify-center rounded-b-[4px]'>
                    {event.date.month}
                  </span>
                </div>
                <div className='flex flex-col justify-between h-full py-1'>
                  <h4 className='text-lg font-medium'>{event.title}</h4>
                  <span className='flex items-center gap-x-1'>
                    <LocationIcon />
                    <span className='text-xs text-[#777777]'>
                      {event.location}
                    </span>
                  </span>
                </div>
              </div>
              <span className='text-lg font-medium text-[#777777] py-1'>
                {event.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
