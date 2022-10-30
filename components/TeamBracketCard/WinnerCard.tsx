import Image from "next/image";
import { getTeam } from "../../lib/getTeam";
import { tournamentStats } from "../../lib/matchWinner";
import { MatchData } from "../../lib/types/bracket";
import H3 from "../Title/H3";

const WinnerCard = ({ teamData }: { teamData: MatchData }) => {
  const team = getTeam(teamData.id);
  console.log(tournamentStats(teamData.id));
  return (
    <div className="p-2 m-2 bg-black shadow-xl shadow-gray-800/50 text-white">
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
          <div
            className={`flex justify-center items-center bg-gray-900 rounded-full w-16 h-16 text-cyan-500`}
          >
            <p className={`text-3xl p-2`}>{tournamentStats(team.id)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
