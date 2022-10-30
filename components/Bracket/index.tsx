import BracketGroupContainer from "./BracketGroupContainer";
import ColumnTitle from "./ColumnTitle";

const BracketBoard = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-black">
        <div className="grid grid-cols-4 px-8 py-2 max-w-7xl mx-auto">
          <ColumnTitle title={"Quarterfinals"} />
          <ColumnTitle title={"Semifinals"} />
          <ColumnTitle title={"Final"} />
          <ColumnTitle title={"Tournament winner"} arrow={false} />
        </div>
      </div>
      <div className="w-full">
        <BracketGroupContainer />
      </div>
    </div>
  );
};

export default BracketBoard;
