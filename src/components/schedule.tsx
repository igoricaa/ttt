'use client';

import { Card } from '@/components/ui/card';
import React from 'react';

const ClassTypes = {
  NO_GI: { type: 'NO_GI', label: 'GRAPPLING' },
  GI: { type: 'GI', label: 'BJJ' },
  MMA: { type: 'MMA', label: 'MMA' },
  WRESTLING: { type: 'WRESTLING', label: 'WRESTLING' },
  KIDS: { type: 'KIDS', label: 'BJJ' },
  STRIKING: { type: 'STRIKING', label: 'STRIKING' },
  OPEN_MAT: { type: 'OPEN_MAT', label: 'BJJ' },
} as const;

type ClassType = (typeof ClassTypes)[keyof typeof ClassTypes];

interface ClassEvent {
  name: string;
  startTime: string;
  endTime: string;
  classType: ClassType;
}

interface DaySchedule {
  day: string;
  classes: ClassEvent[];
}

const schedule: DaySchedule[] = [
  {
    day: 'Monday',
    classes: [
      {
        name: 'No-Gi Class',
        startTime: '07:00',
        endTime: '08:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'MMA Class',
        startTime: '09:00',
        endTime: '10:30',
        classType: ClassTypes.MMA,
      },
      {
        name: 'Wrestling Class',
        startTime: '17:30',
        endTime: '18:30',
        classType: ClassTypes.WRESTLING,
      },
      {
        name: 'No-Gi Class',
        startTime: '18:30',
        endTime: '20:00',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'GI + Kids',
        startTime: '17:30',
        endTime: '18:30',
        classType: ClassTypes.GI,
      },
      {
        name: 'MMA Class',
        startTime: '21:00',
        endTime: '22:30',
        classType: ClassTypes.MMA,
      },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      {
        name: 'GI Class',
        startTime: '07:00',
        endTime: '08:30',
        classType: ClassTypes.GI,
      },
      {
        name: 'Kids 3-6 6-9',
        startTime: '17:30',
        endTime: '18:30',
        classType: ClassTypes.KIDS,
      },
      {
        name: 'Striking',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.STRIKING,
      },
      {
        name: 'MMA Class',
        startTime: '19:30',
        endTime: '21:00',
        classType: ClassTypes.MMA,
      },
      {
        name: 'No-Gi Class',
        startTime: '21:00',
        endTime: '22:30',
        classType: ClassTypes.NO_GI,
      },
    ],
  },
  // Add other days...
];

const getClassBackground = (classType: ClassType) => {
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
    case 'STRIKING':
      return 'bg-classes-striking-default';
    case 'OPEN_MAT':
      return 'bg-classes-gi-default';
    default:
      return 'bg-white';
  }
};

const getClassLabelBackground = (classType: ClassType) => {
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
    case 'STRIKING':
      return 'bg-classes-striking-darker';
    case 'OPEN_MAT':
      return 'bg-classes-gi-darker';
    default:
      return 'bg-white';
  }
};

// Generate time slots from 07:00 to 23:00
const timeSlots = Array.from({ length: 17 }, (_, i) => {
  const hour = i + 7;
  return `${hour.toString().padStart(2, '0')}:00`;
});

const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

export function Schedule() {
  return (
    <div className='col-span-10 col-start-2 p-4 overflow-x-auto'>
      <div className='min-w-[800px] relative'>
        {/* Fixed time sidebar */}
        <div className='absolute left-0 top-0 bottom-0 w-8 bg-classes-darkblue text-white z-10 rounded-tl-[45px] rounded-bl-[45px]'>
          <div className='h-8 flex items-center justify-center'></div>
          {timeSlots.map((time, index) => (
            <div
              key={time}
              className={`h-12 flex justify-center text-xxs pt-1 ${
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
                className={`h-12  ${
                  index === 16
                    ? 'border-b-0'
                    : 'border-b-[0.5px] border-[#403155]'
                }`}
              />{' '}
              {/* Time slot cell (covered by sidebar) */}
              {[
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ].map((day) => (
                <div
                  key={`${day}-${time}`}
                  className={`h-12 relative border-r-[0.5px] border-b-[0.5px] border-[#403155] ${
                    day === 'Saturday' ? 'bg-[#726e5c]' : ''
                  } ${
                    index === 16 && day === 'Saturday'
                      ? 'rounded-br-[45px]'
                      : ''
                  }`}
                >
                  {schedule
                    .find((d) => d.day === day)
                    ?.classes.filter((event) => {
                      const eventStart = timeToMinutes(event.startTime);
                      const slotStart = timeToMinutes(time);
                      const slotEnd = slotStart + 60;
                      return eventStart >= slotStart && eventStart < slotEnd;
                    })
                    .map((event, eventIndex) => {
                      const startMinutes = timeToMinutes(event.startTime);
                      const endMinutes = timeToMinutes(event.endTime);
                      const slotStart = timeToMinutes(time);
                      const duration = (endMinutes - startMinutes) / 60;
                      const offset = (startMinutes - slotStart) / 60;

                      return (
                        <Card
                          key={eventIndex}
                          className={`absolute left-0 right-0 mx-auto max-w-[90%] p-2 font-semibold text-classes-darkblue rounded-lg ${getClassBackground(
                            event.classType
                          )} overflow-hidden`}
                          style={{
                            top: `${offset ? offset * 3.3 : 0.2}rem`,
                            height: `${duration * 2.7}rem`,
                            zIndex: 10,
                          }}
                        >
                          <div
                            className={`absolute top-2 right-2 text-[6px] text-white uppercase font-semibold rounded-[20px] px-1 py-0.5 ${getClassLabelBackground(
                              event.classType
                            )}`}
                          >
                            {event.classType.label}
                          </div>
                          <div className='text-sm truncate'>{event.name}</div>
                          <div className='text-xxs'>
                            {event.startTime} - {event.endTime}
                          </div>
                        </Card>
                      );
                    })}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
