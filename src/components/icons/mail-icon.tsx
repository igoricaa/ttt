import * as React from 'react';

const MailIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = '#FCFC62',
}: {
  color?: string;
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='25'
    height='21'
    fill='none'
    viewBox='0 0 25 21'
  >
    <path
      fill={color}
      d='M2.833 20.167a2.33 2.33 0 0 1-1.706-.71 2.33 2.33 0 0 1-.711-1.707V3.25q0-.996.71-1.706a2.33 2.33 0 0 1 1.707-.71h19.333q.997 0 1.707.71t.71 1.706v14.5a2.33 2.33 0 0 1-.71 1.707 2.32 2.32 0 0 1-1.707.71zm9.666-8.458L2.833 5.667V17.75h19.333V5.667zm0-2.417 9.667-6.042H2.833zM2.833 5.667V3.25v14.5z'
    ></path>
  </svg>
);

export default MailIcon;
