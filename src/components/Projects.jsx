import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="pb-4 justify-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("projects")}
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-wrap justify-center cursor-pointer"
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
            <motion.div className="w-full lg:w-1/4 justify-center flex m-2">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div className="w-full max-w-xl lg:w-3/4 justify-center text-center lg:text-left">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">
                {project.title === "Car Gallery" ? (
                  <span className="text-left">
                    {project.description}
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
                    className="mr-2 rounded bg-neutral-800 p-2 lg:text-sm text-xs font-medium text-stone-300 hover:bg-neutral-700 hover:underline transition-colors"
                  >
                    {tech}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      )}
    </div>
  );
}
