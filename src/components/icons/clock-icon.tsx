import * as React from 'react';

const ClockIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = '#FCFC62',
}: {
  color?: string;
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='22'
    height='22'
    fill='none'
    viewBox='0 0 22 22'
  >
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M1 11a10 10 0 1 0 20 0 10 10 0 0 0-20 0'
    ></path>
    <path
      stroke='#FCFC62'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M11 5.445V11l3.333 3.334'
    ></path>
  </svg>
);

export default ClockIcon;
