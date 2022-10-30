import { bracket, Match, MatchData, Team } from "./types/bracket";

export const matchWinner = ({ match }: { match: Match }) => {
  return match.teams.reduce((prev, current) =>
    prev.score > current.score ? prev : current
  );
};

export const tournamentStats = (id: number) => {
  let score = 0;
  const allMatches = [
    ...bracket[0].matches.map((match: Match) =>
      match.teams.find((match) => match.id === id)
    ),
    ...bracket[1].matches.map((match: Match) =>
      match.teams.find((match) => match.id === id)
    ),
    ...bracket[2].matches.map((match: Match) =>
      match.teams.find((match) => match.id === id)
    ),
  ].filter(Boolean) as MatchData[];

  return allMatches.reduce((total, current) => total + current.score, 0);
};
