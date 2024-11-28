import ArrowIcon from './icons/arrow';

export default function Arrow(props: {
  disabled?: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? 'opacity-20 pointer-events-none' : '';
  return (
    <ArrowIcon
      className={`w-6 h-6 sm:w-9 sm:h-9 cursor-pointer ${
        props.left ? 'rotate-180' : ''
      } ${disabled}`}
      onClick={props.onClick}
    />
  );
}
