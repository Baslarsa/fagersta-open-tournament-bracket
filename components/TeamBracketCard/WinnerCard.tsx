import Image from "next/image";
import { getTeam } from "../../lib/getTeam";
import { tournamentStats } from "../../lib/matchWinner";
import { MatchData } from "../../lib/types/bracket";
import H3 from "../Title/H3";

const WinnerCard = ({ teamData }: { teamData: MatchData }) => {
  const team = getTeam(teamData.id);
  console.log(tournamentStats(teamData.id));
  return (
    <div className="p-2 m-2 bg-black shadow-xl shadow-gray-800/50">
      <div className="flex items-center justify-center">
        <div>
          <Image
            src={team.imgUrl}
            alt={`Tournament winner image of ${team.name}`}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="py-2">
        <H3>{team.name}</H3>
        <div className="flex justify-between">
          <p className="uppercase text-gray-500">Total Score:</p>
          {tournamentStats(team.id)}
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
