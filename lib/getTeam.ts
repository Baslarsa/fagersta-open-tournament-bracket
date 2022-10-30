import { Team, teams } from "./types/bracket";

//Get team by ID from our bracket data
export const getTeam = (teamId: number) => {
  return teams.find((t) => t.id === teamId) as Team;
};
