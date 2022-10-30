import { Team, teams } from "./types/bracket";

export const getTeam = (teamId: number) => {
  return teams.find((t) => t.id === teamId) as Team;
};
