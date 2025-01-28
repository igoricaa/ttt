'use client';

import { Card } from '@/components/ui/card';
import React from 'react';

const ClassTypes = {
  NO_GI: { type: 'NO_GI', label: 'GRAPPLING' },
  GI: { type: 'GI', label: 'BJJ' },
  MMA: { type: 'MMA', label: 'MMA' },
  WRESTLING: { type: 'WRESTLING', label: 'WRESTLING' },
  KIDS: { type: 'KIDS', label: 'BJJ' },
  OPEN_MAT: { type: 'OPEN_MAT', label: 'BJJ' },
  BOXING: { type: 'BOXING', label: 'BOXING' },
  KICKBOXING: { type: 'KICKBOXING', label: 'KICKBOXING' },
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
        name: 'No-Gi',
        startTime: '07:30',
        endTime: '08:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'MMA Class',
        startTime: '09:00',
        endTime: '10:00',
        classType: ClassTypes.MMA,
      },
      {
        name: 'Kids Combat',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.KIDS,
      },
      {
        name: 'Boxing',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.BOXING,
      },
      {
        name: 'No-Gi',
        startTime: '19:30',
        endTime: '20:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'Kickboxing',
        startTime: '19:30',
        endTime: '20:30',
        classType: ClassTypes.KICKBOXING,
      },
      {
        name: 'No-Gi',
        startTime: '20:30',
        endTime: '21:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'MMA Basic',
        startTime: '20:30',
        endTime: '21:30',
        classType: ClassTypes.MMA,
      },
      {
        name: 'BJJ',
        startTime: '21:30',
        endTime: '22:30',
        classType: ClassTypes.GI,
      },
      {
        name: 'MMA Advanced',
        startTime: '21:30',
        endTime: '22:30',
        classType: ClassTypes.MMA,
      },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      {
        name: 'No-Gi',
        startTime: '07:30',
        endTime: '08:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'MMA',
        startTime: '09:00',
        endTime: '10:00',
        classType: ClassTypes.MMA,
      },
      {
        name: 'Freestyle Wrestling',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.WRESTLING,
      },
      {
        name: 'No-Gi',
        startTime: '19:30',
        endTime: '20:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'No-Gi',
        startTime: '20:30',
        endTime: '21:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'MMA Basic',
        startTime: '20:30',
        endTime: '21:30',
        classType: ClassTypes.MMA,
      },
      {
        name: 'MMA Advanced',
        startTime: '21:30',
        endTime: '22:30',
        classType: ClassTypes.MMA,
      },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      {
        name: 'No-Gi',
        startTime: '07:30',
        endTime: '08:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'MMA Class',
        startTime: '09:00',
        endTime: '10:00',
        classType: ClassTypes.MMA,
      },
      {
        name: 'Kids Combat',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.KIDS,
      },
      {
        name: 'Boxing',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.BOXING,
      },
      {
        name: 'No-Gi',
        startTime: '19:30',
        endTime: '20:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'Kickboxing',
        startTime: '19:30',
        endTime: '20:30',
        classType: ClassTypes.KICKBOXING,
      },
      {
        name: 'No-Gi',
        startTime: '20:30',
        endTime: '21:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'MMA Basic',
        startTime: '20:30',
        endTime: '21:30',
        classType: ClassTypes.MMA,
      },
      {
        name: 'BJJ',
        startTime: '21:30',
        endTime: '22:30',
        classType: ClassTypes.GI,
      },
      {
        name: 'MMA Advanced',
        startTime: '21:30',
        endTime: '22:30',
        classType: ClassTypes.MMA,
      },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      {
        name: 'No-Gi',
        startTime: '07:30',
        endTime: '08:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'MMA',
        startTime: '09:00',
        endTime: '10:00',
        classType: ClassTypes.MMA,
      },
      {
        name: 'Freestyle Wrestling',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.WRESTLING,
      },
      {
        name: 'No-Gi',
        startTime: '19:30',
        endTime: '20:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'No-Gi',
        startTime: '20:30',
        endTime: '21:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'MMA Basic',
        startTime: '20:30',
        endTime: '21:30',
        classType: ClassTypes.MMA,
      },
      {
        name: 'MMA Advanced',
        startTime: '21:30',
        endTime: '22:30',
        classType: ClassTypes.MMA,
      },
    ],
  },
  {
    day: 'Friday',
    classes: [
      {
        name: 'No-Gi',
        startTime: '07:30',
        endTime: '08:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'MMA Class',
        startTime: '09:00',
        endTime: '10:00',
        classType: ClassTypes.MMA,
      },
      {
        name: 'Kids Combat',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.KIDS,
      },
      {
        name: 'Boxing',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.BOXING,
      },
      {
        name: 'No-Gi',
        startTime: '19:30',
        endTime: '20:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'Kickboxing',
        startTime: '19:30',
        endTime: '20:30',
        classType: ClassTypes.KICKBOXING,
      },
      {
        name: 'No-Gi',
        startTime: '20:30',
        endTime: '21:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'MMA Basic',
        startTime: '20:30',
        endTime: '21:30',
        classType: ClassTypes.MMA,
      },
      {
        name: 'BJJ',
        startTime: '21:30',
        endTime: '22:30',
        classType: ClassTypes.GI,
      },
      {
        name: 'MMA Advanced',
        startTime: '21:30',
        endTime: '22:30',
        classType: ClassTypes.MMA,
      },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      {
        name: 'No-Gi',
        startTime: '13:00',
        endTime: '14:00',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'MMA Day',
        startTime: '13:00',
        endTime: '14:00',
        classType: ClassTypes.MMA,
      },
      {
        name: 'Open mat',
        startTime: '14:00',
        endTime: '15:30',
        classType: ClassTypes.NO_GI,
      },
      {
        name: 'Freestyle Wrestling',
        startTime: '15:30',
        endTime: '16:30',
        classType: ClassTypes.WRESTLING,
      },
    ],
  },
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
const timeSlots = Array.from({ length: 17 }, (_, i) => {
  const hour = i + 7;
  return `${hour.toString().padStart(2, '0')}:00`;
});

const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

export function Schedule() {
  const hasClassesInTimeSlot = (time: string) => {
    return schedule.some((day) =>
      day.classes.some((event) => {
        const eventStart = timeToMinutes(event.startTime);
        const slotStart = timeToMinutes(time);
        const slotEnd = slotStart + 60;
        return eventStart >= slotStart && eventStart < slotEnd;
      })
    );
  };

  // Determine which time slots have classes
  const timeSlotsWithClasses = timeSlots.map((time) =>
    hasClassesInTimeSlot(time)
  );

  return (
    <div className='col-span-full 3xl:col-span-10 3xl:col-start-2 p-4 overflow-x-auto'>
      <div className='min-w-[1400px] relative'>
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
                className={`h-12 ${
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
                  eventsInSlot.length > 0 ? 90 / eventsInSlot.length : 90; // 90% total width divided by number of events

                return (
                  <div
                    key={`${day}-${time}`}
                    className={`h-12 relative ${
                      index >= 3 && index < 10 && day !== 'Saturday'
                        ? ''
                        : 'border-b-[0.5px] border-[#403155]'
                    } ${
                      index >= 3 && index < 11 && day !== 'Saturday'
                        ? ''
                        : 'border-r-[0.5px] border-[#403155]'
                    } ${day === 'Saturday' ? 'bg-[#726e5c]' : ''} ${
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

                      return (
                        <Card
                          key={eventIndex}
                          className={`absolute p-2 font-semibold text-classes-darkblue rounded-lg ${getClassBackground(
                            event.classType
                          )} overflow-hidden border-0 hover:shadow-classCard hover:border-l-4 border-[#20121259] transition-all duration-200 ease-out`}
                          style={{
                            top: `${offset ? offset * 3.3 : 0.2}rem`,
                            height: `${duration * 2.7}rem`,
                            left: `${leftOffset}%`,
                            width: `${eventWidth}%`,
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
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
