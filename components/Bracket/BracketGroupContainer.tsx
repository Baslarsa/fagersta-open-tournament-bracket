import { groupTeams } from "../../lib/generateRandomizedGroups";
import { Team } from "../../lib/types/bracket";
import Card from "../Card";

const BracketGroupContainer = ({
  teams,
  mirror,
}: {
  teams: Team[];
  mirror?: boolean;
}) => {
  const matches = groupTeams(teams, 2);

  return (
    <div className="bg-yellow-500 grid grid-cols-3">
      {matches.map((contestant) => (
        <div className="bg-pink-400 p-2 m-1">
          {contestant.map((i) => (
            <Card team={i} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BracketGroupContainer;
