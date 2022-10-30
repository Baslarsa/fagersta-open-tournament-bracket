import { matchWinner } from "../../lib/matchWinner";
import { Match, MatchData } from "../../lib/types/bracket";
import TeamBracketCard from "../TeamBracketCard";

const Match = ({ match }: { match: Match }) => {
  return (
    <div className={`my-2 mx-5 p-0.5 flex flex-col justify-center`}>
      {match?.teams.map((teamData: MatchData, i) => {
        const isWinner = matchWinner({ match }) === teamData;

        return (
          <TeamBracketCard
            teamData={teamData}
            isWinner={isWinner}
            key={`card--id--${teamData.id}`}
          />
        );
      })}
    </div>
  );
};

export default Match;
