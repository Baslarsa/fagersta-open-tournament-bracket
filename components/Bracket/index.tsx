import BracketColumnHeader from "./BracketColumnHeader";
import BracketGroupContainer from "./BracketGroupContainer";

const BracketBoard = () => {
  return (
    <div className="w-full h-full">
      <BracketColumnHeader />
      <div className="w-full">
        <BracketGroupContainer />
      </div>
    </div>
  );
};

export default BracketBoard;
