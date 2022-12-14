import { Team } from "./types/bracket";

export type TeamGroups = {
  groupOne: Team[];
  groupTwo: Team[];
  leftOut: Team[] | undefined;
};

//Functionality to shuffle teams if I were to expand this project with randomizing matches and so on.
const shuffleTeams = (teams: Team[]) => {
  const array = [...teams];
  let currentIndex = array.length;

  // Loop untill array is empty
  while (0 !== currentIndex) {
    // Pick next remaining item
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap it with the current item.
    const temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// Functionality to group teams in two divisions of a bracket.
export const groupTeams = (array: Team[], groupSize: number) => {
  // Divide by closest even value if array is uneven.

  const result = array.reduce((resultArray: Team[][], item, index) => {
    const chunkIndex = Math.floor(index / groupSize);

    if (!resultArray[chunkIndex]) {
      // start a new group
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return result;
};

//Generate two randomized divisions with matchmaking and if uneven numbers, we left one out.
export const generateRandomizedGroups = (teams: Team[]): TeamGroups | null => {
  if (!teams) {
    console.warn("No teams available");
    return null;
  }
  const shuffledTeams = shuffleTeams(teams);

  const [groupOne, groupTwo, leftOut] = groupTeams(
    shuffledTeams,
    Math.floor(teams.length / 2)
  );

  return {
    groupOne,
    groupTwo,
    leftOut,
  };
};
