const LocationIconFilled: React.FC<React.SVGProps<SVGElement>> = ({
  color = '#fff',
}: {
  color?: string;
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='21'
    fill='none'
    viewBox='0 0 18 21'
  >
    <path
      fill={color}
      d='M9 .333a8.25 8.25 0 0 1 8.25 8.25c0 2.818-1.536 5.124-3.155 6.779a18.7 18.7 0 0 1-2.636 2.215l-.391.265-.183.122-.346.22-.308.188-.381.222a1.72 1.72 0 0 1-1.7 0l-.381-.222-.477-.293-.176-.115-.376-.25a19 19 0 0 1-2.835-2.352C2.286 13.707.75 11.402.75 8.583A8.25 8.25 0 0 1 9 .333m0 5.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5'
    ></path>
  </svg>
);

export default LocationIconFilled;
