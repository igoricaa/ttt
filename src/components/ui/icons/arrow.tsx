import * as React from 'react';

const ArrowIcon: React.FC<React.SVGProps<SVGElement>> = ({
  className,
  color = '#fff',
}) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    width='13'
    height='13'
    fill='none'
    viewBox='0 0 13 13'
  >
    <path
      fill={color}
      d='m6.642.159 6.34 6.341-6.34 6.341-.768-.768 5.58-5.573L5.873.927zm-5.415 0L7.568 6.5l-6.34 6.341-.769-.768L6.032 6.5.46.927z'
    ></path>
  </svg>
);

export default ArrowIcon;
