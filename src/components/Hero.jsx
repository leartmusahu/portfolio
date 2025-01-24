import profilePic from "../assets/12.png";
// import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="pb-4 lg:mb-36 m-8">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 mb-10">
          <motion.img
            src={profilePic}
            alt="Leart Musahu"
            className=" rounded-full"
            width={650}
            height={650}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center order-2 lg:order-1"
        >
          <motion.h2
            variants={childVariants}
            className="pb-2 text-4xl tracking-tighter lg:text-6xl"
          >
            Leart Musahu
          </motion.h2>
          <motion.span
            variants={childVariants}
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            {t("subtitle")}
          </motion.span>
          <motion.p
            variants={childVariants}
            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-center lg:text-left"
          >
            {t("heroContent")}
          </motion.p>
          <motion.a
            variants={childVariants}
            href="/Leart Musahu - CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-white rounded-full p-4 text-sm text-stone-800"
          >
            {t("downloadCV")}
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
