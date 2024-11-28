import * as React from 'react';

const PhoneIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = '#FCFC62',
}: {
  color?: string;
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    viewBox='0 0 24 24'
  >
    <path
      fill={color}
      d='M5.275 10.488c1.8 3.537 4.7 6.425 8.237 8.237l2.75-2.75c.338-.338.838-.45 1.276-.3 1.4.462 2.912.712 4.462.712.688 0 1.25.563 1.25 1.25V22c0 .688-.562 1.25-1.25 1.25C10.263 23.25.75 13.738.75 2 .75 1.313 1.313.75 2 .75h4.375c.688 0 1.25.563 1.25 1.25 0 1.563.25 3.063.713 4.463.137.437.037.925-.313 1.274z'
    ></path>
  </svg>
);

export default PhoneIcon;
