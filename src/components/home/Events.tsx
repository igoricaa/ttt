'use client';

import { events } from '@/data/data';
import LocationIcon from '../icons/LocationIcon';
import { Calendar } from '../ui/calendar';
import { useState, useEffect } from 'react';
import { Event } from '@/lib/types';

const Events = () => {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <section className='px-side pt-12 sm:pt-16 lg:pt-32 pb-16 sm:pb-60 lg:pb-32'>
      <h2 className='text-3xl sm:text-7xl font-semibold uppercase text-center'>
        Upcoming Events
      </h2>
      <div className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 items-center gap-x-4 mt-8 sm:mt-16'>
        <div className='col-span-full sm:col-span-5 lg:col-start-5 2xl:col-span-4 2xl:col-start-3 lg:mr-16'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            className='rounded-md border'
          />
        </div>
        <div className='col-span-full lg:col-span-7 2xl:col-span-5 mt-6 sm:mt-8 lg:mt-0'>
          {events.map((event: Event, index: number) => (
            <div
              key={index}
              className='p-4 border-b border-[#EBE9E9] flex items-center gap-x-4'
            >
              <div className='w-[60px] h-[60px]'>
                <span className='text-2xl font-medium text-primary-dark bg-white w-full h-[38px] flex items-center justify-center rounded-t-[4px]'>
                  {event.date.day}
                </span>
                <span className='text-sm w-full h-[22px] bg-[#4A4B2F] flex items-center justify-center rounded-b-[4px]'>
                  {event.date.month}
                </span>
              </div>
              <div className='flex flex-col gap-y-2 w-full'>
                <div className='flex flex-col justify-between h-full gap-y-1 sm:gap-y-2'>
                  <div className='flex flex-col sm:flex-row justify-between gap-y-1'>
                    <h3 className='text-lg font-medium'>{event.title}</h3>
                    <span className='text-lg font-medium text-[#777777]'>
                      {event.time}
                    </span>
                  </div>
                  <span className='flex items-center gap-x-1'>
                    <LocationIcon />
                    <span className='text-xs text-[#777777]'>
                      {event.location}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
