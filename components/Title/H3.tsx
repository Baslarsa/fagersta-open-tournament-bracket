import { CSSProperties } from "react";

const H3 = ({
  children,
  className,
  style,
}: {
  children: string;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <h3
      style={style}
      className={`text-lg tracking-widest font-semibold font-inconsolata ${className}`}
    >
      {children}
    </h3>
  );
};

export default H3;
