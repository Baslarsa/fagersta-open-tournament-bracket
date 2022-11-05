import { CSSProperties } from "react";
import H3 from "../Title/H3";

const ColumnTitle = ({
  title,
  arrow = true,
  className,
  style,
}: {
  title: string;
  arrow?: boolean;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <div style={style} className={`flex items-center text-cyblue ${className}`}>
      <span className="border-b-2 border-cyblue min-w-1 flex-1"></span>
      <H3 className="mx-6" style={{ textShadow: "0px 0px 10px #00CEFC" }}>
        {title}
      </H3>
      <span className="border-b-2 border-cyblue min-w-1 flex-1"></span>
    </div>
  );
};

export default ColumnTitle;
