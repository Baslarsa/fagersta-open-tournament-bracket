import Arrow from "../Icons/Arrow";
import H3 from "../Title/H3";

const ColumnTitle = ({
  title,
  arrow = true,
}: {
  title: string;
  arrow?: boolean;
}) => {
  return (
    <div className="flex justify-between items-center text-white px-4">
      <H3>{title}</H3>
      {arrow && <Arrow className="text-white fill-current" />}
      <span></span>
    </div>
  );
};

export default ColumnTitle;
