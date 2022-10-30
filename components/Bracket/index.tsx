import BracketGroupContainer from "./BracketGroupContainer";
import ColumnTitle from "./ColumnTitle";

const BracketBoard = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-4 px-8 bg-black py-2">
        <ColumnTitle title={"Quarterfinals"} />
        <ColumnTitle title={"Semifinals"} />
        <ColumnTitle title={"Final"} />
        <ColumnTitle title={"Tournament winner"} arrow={false} />
      </div>
      <div className="flex">
        <BracketGroupContainer />
      </div>
    </div>
  );
};

export default BracketBoard;
