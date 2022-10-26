import Image from "next/image";
import { Team } from "../../lib/types/bracket";

const Card = ({ team, onClick }: { team: Team; onClick: () => void }) => {
  return (
    <div
      className="bg-gray-800 py-4 px-3 flex rounded-md m-1"
      onClick={onClick}
    >
      <div className="image w-16 h-16 bg-green-100 rounded-full overflow-hidden">
        <Image
          width={100}
          height={100}
          src={team.imgUrl}
          alt={`team avatar for ${team.name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 mx-2 p-2">
        <h3 className="text-sm">{team.name}</h3>
      </div>
    </div>
  );
};

export default Card;
