import Image from "next/image";
import { getTeam } from "../../lib/getTeam";
import { MatchData } from "../../lib/types/bracket";
import H3 from "../Title/H3";

const TeamBracketCard = ({
  teamData,
  className,
  reverse,
  isWinner,
}: {
  teamData: MatchData;
  className?: string;
  reverse?: boolean;
  isWinner: boolean;
}) => {
  const team = getTeam(teamData.id);

  return (
    <div
      className={` text-white inline-flex ${className} ${
        !isWinner && "saturate-0"
      } items-start ${reverse && "flex-row-reverse items-end -translate-y-5"}`}
    >
      <div className="image w-20 h-20 overflow-hidden">
        <Image
          width={200}
          height={200}
          src={team.imgUrl}
          alt={`team avatar for ${team.name}`}
          className={`object-cover`}
        />
      </div>
      <div
        className={`bg-black flex border border-cyblue/20 ${
          reverse && "flex-row-reverse transform"
        } ${isWinner && "border-cyblue/100"} py-2 flex-1 h-auto`}
      >
        <div
          className="flex-1 flex items-center justify-center uppercase font-bebas text-cyblue"
          style={{ textShadow: "0px 0px 10px #00CEFC" }}
        >
          {team.name}
        </div>
        <div className="font-bebas text-3xl px-4 flex justify-center items-center text-sunset">
          <p style={{ textShadow: "0px 0px 10px #E77812" }}>{teamData.score}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamBracketCard;
