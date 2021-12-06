import { CSSProperties, FC, MouseEventHandler } from "react";

interface CrossProps {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler;
}

const Cross: FC<CrossProps> = ({ className, style, onClick }) => {
  return (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" className={`text-white h-6 w-6 ${className}`} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
};

export default Cross;
