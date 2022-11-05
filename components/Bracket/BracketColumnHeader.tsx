import Arrow from "../Icons/Arrow";
import ColumnTitle from "./ColumnTitle";

const BracketColumnHeader = () => {
  return (
    <div
      className="grid py-2"
      style={{ gridTemplateColumns: "repeat(20, minmax(0, 1fr))" }}
    >
      <ColumnTitle title={"Quarterfinals"} className="col-span-6" />
      <Arrow className="text-cyblue fill-current mx-auto" />
      <ColumnTitle
        title={"Semifinals"}
        className="col-start-8"
        style={{ gridColumnEnd: "14" }}
      />
      <Arrow className="text-cyblue fill-current mx-auto" />
      <ColumnTitle
        title={"Final"}
        style={{ gridColumnStart: "15", gridColumnEnd: "21" }}
      />
    </div>
  );
};

export default BracketColumnHeader;
