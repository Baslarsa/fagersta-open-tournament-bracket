import { useState } from "react";
import { groupTeams } from "../../lib/generateRandomizedGroups";
import { Team } from "../../lib/types/bracket";
import Card from "../Card";

type Results = {
  quarterFinal: Team[];
  semiFinal: Team[];
  final: Team[];
};

const BracketGroupContainer = ({
  teams,
  mirror,
}: {
  teams: Team[];
  mirror?: boolean;
}) => {
  const matches = groupTeams(teams, 2);
  const [winners, setWinners] = useState<Results>({
    quarterFinal: [],
    semiFinal: [],
    final: [],
  });

  console.log(winners.quarterFinal);

  return (
    <div className={`bg-yellow-500 grid grid-cols-3`}>
      <div className="flex flex-col justify-center">
        {matches.map((match, i) => (
          <Heat
            match={match}
            winners={winners}
            setWinner={setWinners}
            stage={"quarterFinal"}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center">
        {winners?.quarterFinal.map((match: Team) => {
          return (
            <Heat
              match={[match]}
              winners={winners}
              setWinner={setWinners}
              stage={"semiFinal"}
            />
          );
        })}
      </div>
      <div className="flex flex-col justify-center">
        {winners?.semiFinal.map((match: Team) => {
          return (
            <Heat
              match={[match]}
              winners={winners}
              setWinner={setWinners}
              stage={"final"}
            />
          );
        })}
      </div>
    </div>
  );
};

const Heat = ({
  match,
  winners,
  setWinner,
  stage,
}: {
  match: Team[];
  winners: Results;
  setWinner: (value: Results) => void;
  stage: string;
}) => {
  const handleClick = (team: Team) => {
    switch (stage) {
      case "quarterFinal":
        if (winners.quarterFinal.length < 2) {
          return setWinner({
            ...winners,
            quarterFinal: [...winners.quarterFinal, team],
          });
        }
      case "semiFinal":
        if (winners.semiFinal.length < 1) {
          return setWinner({
            ...winners,
            semiFinal: [...winners.semiFinal, team],
          });
        }
      case "final":
        if (winners.final.length < 1) {
          return setWinner({
            ...winners,
            final: [...winners.final, team],
          });
        }
    }
  };

  return (
    <div className={`bg-pink-400 p-2 m-1 flex flex-col justify-center`}>
      {match?.map((team: Team) => (
        <Card team={team} onClick={() => handleClick(team)} />
      ))}
    </div>
  );
};

export default BracketGroupContainer;
