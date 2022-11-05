import { CSSProperties } from "react";

export const Arrow = ({
  orientation,
  className,
  props,
  style,
}: {
  className?: string;
  orientation?: string;
  props?: JSX.ElementAttributesProperty;
  style?: CSSProperties;
}) => {
  return (
    <>
      <svg
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        className={className}
      >
        <path
          fill-rule="evenodd"
          d="M8.30567 18.6943C8.71388 19.1017 9.37573 19.1017 9.78394 18.6943L15.697 12.7931C15.9227 12.5679 16.0236 12.2653 15.9997 11.9708C16.0058 11.696 15.9039 11.4193 15.694 11.2096L9.78361 5.3057C9.37558 4.89812 8.71404 4.89812 8.30601 5.3057C7.89799 5.71328 7.89799 6.37409 8.30601 6.78167L13.5326 12.0025L8.30567 17.219C7.89746 17.6264 7.89746 18.2869 8.30567 18.6943Z"
          clip-rule="evenodd"
        />
      </svg>
    </>
  );
};

export default Arrow;
