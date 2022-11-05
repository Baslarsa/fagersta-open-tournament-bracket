import { motion } from "framer-motion";
import { bracket } from "../../lib/types/bracket";
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

  return (
    <motion.div
      className={`mx-auto grid w-full my-4`}
      style={{ gridTemplateColumns: "repeat(20, minmax(0, 1fr))" }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className={`flex flex-col justify-evenly col-span-6`}
        variants={item}
      >
        {quarterFinals.map((match, i) => (
          <Match match={match} key={`match--id--${i}`} />
        ))}
      </motion.div>
      <motion.div className="grid grid-cols-2 mx-1" variants={item}>
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
        className={`flex flex-col justify-evenly py-24 col-start-8`}
        style={{ gridColumnEnd: "14" }}
        variants={item}
      >
        {semiFinals.map((match, i) => (
          <Match match={match} key={`match--id--${i}`} />
        ))}
      </motion.div>
      <motion.div className="grid grid-cols-2 mx-1" variants={item}>
        <span className="border-t border-b border-r border-cyblue h-[35%] my-auto flex rounded-tr-md rounded-br-md" />
        <span
          className="border-t border-b border-r border-cyblue h-[0%] my-auto flex shadow-md"
          style={{ textShadow: "0px 0px 10px #00CEFC" }}
        ></span>
      </motion.div>
      <motion.div
        className={`flex flex-col justify-evenly`}
        style={{ gridColumnStart: "15", gridColumnEnd: "21" }}
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
