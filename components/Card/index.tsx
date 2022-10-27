import Image from "next/image";
import { MatchData, Team, teams } from "../../lib/types/bracket";

const Card = ({
  teamData,
  isWinner,
  className,
}: {
  teamData: MatchData;
  isWinner: boolean;
  className?: string;
}) => {
  const team = teams.find((t) => t.id === teamData.id) as Team;

  return (
    <div
      className={`bg-black flex p-1 ${
        isWinner && "border border-cyan-700 transform translate-x-4 scale-110"
      } ${className}`}
    >
      <div className="image w-16 h-16 overflow-hidden">
        <Image
          width={100}
          height={100}
          src={team.imgUrl}
          alt={`team avatar for ${team.name}`}
          className={`w-full h-full object-cover ${
            !isWinner && "grayscale opacity-50"
          }`}
        />
      </div>
      <div className="flex-1 mx-2 p-2">
        <h3 className="text-lg tracking-widest font-semibold font-bebas">
          {team.name}
        </h3>
      </div>
      <div
        className={`flex justify-center items-center bg-gray-900 rounded-full w-16 h-16 ${
          isWinner ? "text-cyan-500" : "opacity-40"
        }`}
      >
        <p className={`text-3xl p-2`}>{teamData.score}</p>
      </div>
    </div>
  );
};

export default Card;
