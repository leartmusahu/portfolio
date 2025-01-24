import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiIonic,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  const { t } = useTranslation();
  return (
    <div className="pb-24">
      <motion.h2
        variants={iconVariants}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("technologies")}
      </motion.h2>
      <motion.div
        variants={iconVariants}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <SiMongodb className="text-7xl text-cyan-500" />
        </motion.div>

        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        >
          <SiMysql className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <SiIonic className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <SiExpress className="text-7xl text-neutral-600" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <SiTailwindcss className="text-7xl text-cyan-300" />
        </motion.div>
      </motion.div>
    </div>
  );
}
