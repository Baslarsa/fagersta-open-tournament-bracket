import { motion } from "framer-motion";
import { matchWinner } from "../../lib/matchWinner";
import { bracket } from "../../lib/types/bracket";
import WinnerCard from "../TeamBracketCard/WinnerCard";
import Match from "./Match";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

const BracketGroupContainer = () => {
  const quarterFinals = bracket[0].matches;
  const semiFinals = bracket[1].matches;
  const final = bracket[2].matches;
  const tournamentWinner = matchWinner({ match: final[0] });

  return (
    <motion.div
      className={`max-w-7xl mx-auto grid grid-cols-4 w-full my-4`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className={`flex flex-col justify-evenly`} variants={item}>
        {quarterFinals.map((match, i) => (
          <Match match={match} key={`match--id--${i}`} />
        ))}
      </motion.div>
      <motion.div
        className={`flex flex-col justify-evenly py-24`}
        variants={item}
      >
        {semiFinals.map((match, i) => (
          <Match match={match} key={`match--id--${i}`} />
        ))}
      </motion.div>
      <motion.div className={`flex flex-col justify-evenly`} variants={item}>
        {final.map((match, i) => (
          <Match match={match} key={`match--id--${i}`} />
        ))}
      </motion.div>
      <motion.div
        className={`flex flex-col justify-evenly p-8`}
        variants={item}
      >
        <WinnerCard teamData={tournamentWinner} />
      </motion.div>
    </motion.div>
  );
};

export default BracketGroupContainer;
