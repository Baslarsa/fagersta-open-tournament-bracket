import { matchWinner } from "../../lib/matchWinner";
import { Match } from "../../lib/types/bracket";
import TeamBracketCard from "../TeamBracketCard";

const Match = ({ match }: { match: Match }) => {
  const isWinner = matchWinner({ match });
  return (
    <div className={`my-2 p-0.5 flex flex-col justify-center`}>
      <TeamBracketCard
        teamData={match.teams[0]}
        key={`card--id--${match.teams[0].id}`}
        isWinner={isWinner === match.teams[0]}
      />
      <TeamBracketCard
        teamData={match.teams[1]}
        key={`card--id--${match.teams[0].id}`}
        reverse={true}
        isWinner={isWinner === match.teams[1]}
      />
    </div>
  );
};

export default Match;
