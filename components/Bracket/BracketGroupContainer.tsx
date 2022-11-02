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
      staggerChildren: 0.5,
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
      className={`max-w-8xl mx-auto grid grid-cols-12 w-full my-4`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className={`flex flex-col justify-evenly col-span-3`}
        variants={item}
      >
        {quarterFinals.map((match, i) => (
          <Match match={match} key={`match--id--${i}`} />
        ))}
      </motion.div>
      <motion.div className="grid grid-cols-2" variants={item}>
        <span
          className="border-t border-b border-r border-cyblue h-[75%] my-auto flex shadow-md rounded-tr-md rounded-br-md"
          style={{ textShadow: "0px 0px 10px #00CEFC" }}
        >
          <span
            className="border-t border-b border-cyblue my-auto h-[35%] w-full p-2"
            style={{ textShadow: "0px 0px 10px #00CEFC" }}
          />
        </span>
        <span className="border-t border-b  border-cyblue h-[35%] my-auto flex" />
      </motion.div>
      <motion.div
        className={`flex flex-col justify-evenly py-24 col-start-5 col-end-8`}
        variants={item}
      >
        {semiFinals.map((match, i) => (
          <Match match={match} key={`match--id--${i}`} />
        ))}
      </motion.div>
      <motion.div className="grid grid-cols-2" variants={item}>
        <span className="border-t border-b border-r border-cyblue h-[35%] my-auto flex rounded-tr-md rounded-br-md" />
        <span
          className="border-t border-b border-r border-cyblue h-[0%] my-auto flex shadow-md"
          style={{ textShadow: "0px 0px 10px #00CEFC" }}
        ></span>
      </motion.div>
      <motion.div
        className={`flex flex-col justify-evenly col-start-9 col-end-12`}
        variants={item}
      >
        {final.map((match, i) => (
          <Match match={match} key={`match--id--${i}`} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BracketGroupContainer;
