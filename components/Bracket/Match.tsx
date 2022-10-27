import {
  Match,
  MatchData,
  Results,
  Team,
  teams,
} from "../../lib/types/bracket";
import Card from "../Card";

const Match = ({ match }: { match: Match }) => {
  const winner = match.teams.reduce(function (prev, current) {
    return prev.score > current.score ? prev : current;
  });

  return (
    <div className={`my-2 mx-5 p-0.5 flex flex-col justify-center`}>
      {match?.teams.map((teamData: MatchData, i) => {
        const isWinner = winner === teamData;

        return <Card teamData={teamData} isWinner={isWinner} />;
      })}
    </div>
  );
};

export default Match;
