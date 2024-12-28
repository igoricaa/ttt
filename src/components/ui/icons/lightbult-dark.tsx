import * as React from 'react';

const LightbulbDark: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='30'
    height='30'
    fill='none'
    viewBox='0 0 30 30'
    className={props.className}
  >
    <path
      stroke='#D2D2BD'
      strokeWidth='1.5'
      d='M24.375 18.125a9.375 9.375 0 1 1-15.626-6.988c1.4-1.253 2.1-1.88 2.29-2.112.609-.751.635-.813.787-1.766.049-.297.049-.742.049-1.634 0-1.169 0-1.753.251-2.188.165-.285.402-.521.687-.686C13.247 2.5 13.83 2.5 15 2.5s1.753 0 2.188.251c.285.165.521.401.686.686.251.435.251 1.02.251 2.188 0 .891 0 1.337.047 1.634.154.953.18 1.015.79 1.765.188.232.89.86 2.29 2.115a9.35 9.35 0 0 1 3.123 6.986Z'
    ></path>
    <path
      stroke='#D2D2BD'
      strokeWidth='1.5'
      d='M11.875 5.625h6.25'
      opacity='0.5'
    ></path>
  </svg>
);

export default LightbulbDark;
