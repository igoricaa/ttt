import { Card } from '@/components/ui/card';
import React from 'react';
import TTTLetters from './ui/logos/ttt-letters';
import { ClassType, schedule } from '@/data/data';

export const getClassBackground = (classType: ClassType) => {
  switch (classType.type) {
    case 'NO_GI':
      return 'bg-classes-noGi-default';
    case 'GI':
      return 'bg-classes-gi-default';
    case 'MMA':
      return 'bg-classes-mma-default';
    case 'WRESTLING':
      return 'bg-classes-wrestling-default';
    case 'KIDS':
      return 'bg-classes-kids-default';
    case 'BOXING':
      return 'bg-classes-striking-default';
    case 'KICKBOXING':
      return 'bg-classes-striking-default';
    case 'OPEN_MAT':
      return 'bg-classes-gi-default';
    default:
      return 'bg-white';
  }
};

export const getClassLabelBackground = (classType: ClassType) => {
  switch (classType.type) {
    case 'NO_GI':
      return 'bg-classes-noGi-darker';
    case 'GI':
      return 'bg-classes-gi-darker';
    case 'MMA':
      return 'bg-classes-mma-darker';
    case 'WRESTLING':
      return 'bg-classes-wrestling-darker';
    case 'KIDS':
      return 'bg-classes-kids-darker';
    case 'BOXING':
      return 'bg-classes-striking-darker';
    case 'KICKBOXING':
      return 'bg-classes-striking-darker';
    case 'OPEN_MAT':
      return 'bg-classes-gi-darker';
    default:
      return 'bg-white';
  }
};

// Generate time slots from 07:00 to 23:00
export const timeSlots = Array.from({ length: 17 }, (_, i) => {
  const hour = i + 7;
  return `${hour.toString().padStart(2, '0')}:00`;
});

export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

export function Schedule() {
  return (
    <div className='col-span-full 4xl:col-span-10 4xl:col-start-2 p-4 overflow-x-auto'>
      <div className='min-w-[1400px] relative'>
        <TTTLetters className='absolute top-[242px] left-0 w-5/6 h-auto' />
        {/* Fixed time sidebar */}
        <div className='absolute left-0 top-0 bottom-0 w-8 bg-classes-darkblue text-white z-10 rounded-tl-[45px] rounded-bl-[45px]'>
          <div className='h-8 flex items-center justify-center'></div>
          {timeSlots.map((time, index) => (
            <div
              key={time}
              className={`h-17 flex justify-center text-xxs pt-1 ${
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
                className={`h-17 ${
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
                      const eventEnd = timeToMinutes(event.endTime);
                      const slotStart = timeToMinutes(time);
                      const slotEnd = slotStart + 60;
                      const eventDuration = eventEnd - eventStart;

                      const isEventInSlot =
                        (eventStart >= slotStart && eventStart < slotEnd) ||
                        (eventDuration > 60 &&
                          eventStart < slotStart &&
                          eventStart > slotStart - eventDuration);

                      return isEventInSlot;
                    }) || [];

                // Calculate width for each event based on number of concurrent events
                const isNotSolo = eventsInSlot.some(
                  (event) => event.isSolo === false
                );

                const eventWidth = isNotSolo
                  ? 40
                  : eventsInSlot.length > 0
                  ? 90 / eventsInSlot.length
                  : 90;

                return (
                  <div
                    key={`${day}-${time}`}
                    className={`h-17 relative ${
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
                      const offset = (startMinutes - slotStart) / 60;
                      const duration = endMinutes - startMinutes;

                      const isAdded = duration > 60 && startMinutes < slotStart;

                      if (isAdded) {
                        return null;
                      }

                      const currIndex = event.position === 'left' ? 0 : 1;

                      // Calculate left offset for each card
                      const leftOffset =
                        event.isSolo ||
                        (event.isSolo === false && event.position === 'left')
                          ? 5
                          : currIndex * eventWidth +
                            (100 - eventWidth * eventsInSlot.length) / 2;

                      const eventWidthCurr = event.isSolo
                        ? 90
                        : event.isSolo === false
                        ? 40
                        : null;

                      return (
                        <Card
                          key={eventIndex}
                          className={`absolute flex flex-col justify-between px-2 py-[7px] font-semibold text-classes-darkblue rounded-lg ${getClassBackground(
                            event.classType
                          )} overflow-hidden border-0 hover:shadow-classCard hover:border-l-4 border-[#20121259] transition-all duration-200 ease-out`}
                          style={{
                            top: `${offset ? offset * 4.7 : 0.2}rem`,
                            height: `${(duration / 60) * 4.2}rem`,
                            left: `${leftOffset}%`,
                            width: `${eventWidthCurr ? eventWidthCurr : eventWidth}%`,
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
