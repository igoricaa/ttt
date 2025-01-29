'use client';

import { Card } from '@/components/ui/card';
import React from 'react';
import TTTLetters from './ui/logos/ttt-letters';
import useMediaQuery from '@/hooks/useMediaQuery';
import { getClassBackground, getClassLabelBackground, schedule, timeSlots, timeToMinutes } from './schedule';

export function Schedule() {
    const isMobile = useMediaQuery('(max-width: 640px)');
  
    return (
      <div className='col-span-full 3xl:col-span-10 3xl:col-start-2 p-4 overflow-x-auto'>
        <div className='min-w-[1400px] relative'>
          <TTTLetters className='absolute top-44 sm:top-[242px] left-0 w-5/6 h-auto' />
          {/* Fixed time sidebar */}
          <div className='absolute left-0 top-0 bottom-0 w-8 bg-classes-darkblue text-white z-10 rounded-tl-[45px] rounded-bl-[45px]'>
            <div className='h-8 flex items-center justify-center'></div>
            {timeSlots.map((time, index) => (
              <div
                key={time}
                className={`h-12 sm:h-17 flex justify-center text-xxs pt-1 ${
                  index === 16 ? 'border-b-0' : 'border-b-[0.5px] border-white'
                }`}
              >
                {time}
              </div>
            ))}
          </div>
  
          <div className='grid grid-cols-[32px_repeat(6,1fr)] bg-classes-bg rounded-[45px] shadow-schedule'>
            {/* Header row */}
            <div className='col-start-1 h-8' /> {/* Empty corner cell */}
            {[
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ].map((day) => (
              <div
                key={day}
                className={`h-8 flex items-center px-4 bg-classes-darkblue text-sm text-white font-semibold border-r-[0.5px] border-[#403155] ${
                  day === 'Saturday' ? 'rounded-tr-[45px]' : ''
                }`}
              >
                {day}
              </div>
            ))}
            {/* Time slots and events */}
            {timeSlots.map((time, index) => (
              <React.Fragment key={time}>
                <div
                  className={`h-12 sm:h-17 ${
                    index === 16
                      ? 'border-b-0'
                      : index >= 3 && index < 11
                      ? ''
                      : 'border-b-[0.5px] border-[#403155]'
                  }`}
                />
                {/* Time slot cell (covered by sidebar) */}
                {[
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ].map((day) => {
                  const eventsInSlot =
                    schedule
                      .find((d) => d.day === day)
                      ?.classes.filter((event) => {
                        const eventStart = timeToMinutes(event.startTime);
                        const slotStart = timeToMinutes(time);
                        const slotEnd = slotStart + 60;
                        return eventStart >= slotStart && eventStart < slotEnd;
                      }) || [];
  
                  // Calculate width for each event based on number of concurrent events
                  const eventWidth =
                    eventsInSlot.length > 0 ? 90 / eventsInSlot.length : 90;
  
                  return (
                    <div
                      key={`${day}-${time}`}
                      className={`h-12 sm:h-17 relative ${
                        index >= 3 && index < 10 && day !== 'Saturday'
                          ? ''
                          : 'border-b-[0.5px] border-[#403155]'
                      } ${
                        index >= 3 &&
                        index < 11 &&
                        day !== 'Saturday' &&
                        day !== 'Friday'
                          ? ''
                          : 'border-r-[0.5px] border-[#403155]'
                      } ${
                        index === 16 && day === 'Saturday'
                          ? 'rounded-br-[45px]'
                          : ''
                      }`}
                    >
                      {eventsInSlot.map((event, eventIndex) => {
                        const startMinutes = timeToMinutes(event.startTime);
                        const endMinutes = timeToMinutes(event.endTime);
                        const slotStart = timeToMinutes(time);
                        const duration = (endMinutes - startMinutes) / 60;
                        const offset = (startMinutes - slotStart) / 60;
  
                        // Calculate left offset for each card
                        const leftOffset =
                          eventIndex * eventWidth +
                          (100 - eventWidth * eventsInSlot.length) / 2;
  
                        console.log('sirina:', eventWidth);
  
                        const topOffset = isMobile ? 3.3 : 4.7;
                        const heightCoef = isMobile ? 3.5 : 4.2;
  
                        return (
                          <Card
                            key={eventIndex}
                            className={`absolute flex flex-col justify-between px-2 py-[7px] font-semibold text-classes-darkblue rounded-lg ${getClassBackground(
                              event.classType
                            )} overflow-hidden border-0 hover:shadow-classCard hover:border-l-4 border-[#20121259] transition-all duration-200 ease-out`}
                            style={{
                              top: `${offset ? offset * topOffset : 0.2}rem`,
                              height: `${duration * heightCoef}rem`,
                              left: `${leftOffset}%`,
                              width: `${eventWidth}%`,
                              zIndex: 10,
                            }}
                          >
                            <div>
                              <div className='text-[13px] truncate'>
                                {event.name}
                              </div>
                              <div className='text-[9px]'>
                                {event.startTime} - {event.endTime}
                              </div>
                            </div>
                            <div
                              className={`${
                                eventWidth === 90
                                  ? 'absolute top-2 right-2'
                                  : 'w-fit'
                              }  text-[8px] text-white uppercase font-semibold rounded-[20px] px-1 py-0.5 ${getClassLabelBackground(
                                event.classType
                              )}`}
                            >
                              {event.coach.map((coach) => coach).join(', ')}
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
  