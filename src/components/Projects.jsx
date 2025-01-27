import { useState, useRef } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  // Refs for slider scroll
  const sliderRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="pb-12 relative">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        {t("projects")}
      </motion.h2>

      <div className="text-sm font-normal text-center mb-4 sm:hidden block">
        Swipe to see all the projects!
      </div>

      <motion.div
        ref={sliderRef}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-x-auto flex gap-6 pb-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex-none w-80 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={() => openModal(project)}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.2,
                },
              },
            }}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            </div>
            <h3 className="mb-2 font-semibold text-lg text-white text-center">
              {project.title}
            </h3>
            <p className="mb-4 text-stone-400 text-sm text-center truncate">
              {project.title === "Car Gallery" ? (
                <span className="text-left">
                  {project.description}
                  <br />
                  <a
                    href="https://667aef2bd951da2e91f5fbf1--cargallery-leartmusahu.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Click here to see the live demo!
                  </a>
                </span>
              ) : (
                project.description
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech, techIndex) => {
                const techLinks = {
                  React: "https://reactjs.org",
                  "Node.js": "https://nodejs.org",
                  Express: "https://expressjs.com",
                  MongoDB: "https://www.mongodb.com",
                  TailwindCSS: "https://tailwindcss.com",
                  Ionic: "https://ionicframework.com/",
                };

                const techLink =
                  techLinks[tech] || `https://www.google.com/search?q=${tech}`;

                return (
                  <a
                    href={techLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={techIndex}
                    className="rounded bg-neutral-700 px-3 py-1 text-xs font-medium text-stone-300 hover:bg-neutral-600 hover:underline transition-colors"
                  >
                    {tech}
                  </a>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 sm:hidden block">
        <button className=" text-black p-4 rounded-full  " onClick={scrollLeft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 sm:hidden block">
        <button className=" text-black p-4 rounded-full " onClick={scrollRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      )}
    </div>
  );
}
