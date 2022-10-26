import { useEffect, useState } from "react";
import {
  generateRandomizedGroups,
  TeamGroups,
} from "../../lib/generateRandomizedGroups";
import { Team } from "../../lib/types/bracket";
import BracketGroupContainer from "./BracketGroupContainer";

const BracketBoard = ({ teams }: { teams: Team[] }) => {
  const [groups, setGroups] = useState<TeamGroups>();

  const randomizeGroups = () => {
    const groups = generateRandomizedGroups(teams);
    if (!groups) return;

    setGroups(groups);
  };

  useEffect(() => {
    randomizeGroups();
  }, []);

  return (
    <div className="p-4 bg-black w-full">
      {groups && (
        <div className="grid grid-cols-2 min-h-[600px]">
          <BracketGroupContainer teams={groups.groupOne} />
          <BracketGroupContainer teams={groups.groupTwo} />
        </div>
      )}
    </div>
  );
};

export default BracketBoard;
