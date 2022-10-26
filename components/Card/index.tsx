import Image from "next/image";
import { Team } from "../../lib/types/bracket";

const Card = ({ team }: { team: Team }) => {
  return (
    <div className="bg-gray-800 py-4 px-3 flex rounded-md m-1">
      <div className="image w-16 h-16 bg-green-100 rounded-full overflow-hidden">
        <Image
          width={100}
          height={100}
          src={team.imgUrl}
          alt={`team avatar for ${team.name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-orange-300 flex-1 mx-2 p-2">
        <h3>{team.name}</h3>
      </div>
    </div>
  );
};

export default Card;
