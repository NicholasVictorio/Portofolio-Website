"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import Section from "./Section";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Project 1 description",
    imgUrl: "/imgUrls/projects/1.png",
    gitUrl: "https://github.com/NicholasVictorio",
    webUrl: "/"
  },
  {
    id: 2,
    title: "Laundry Website",
    description: "Project 2 description",
    imgUrl: "/imgUrls/projects/2.png",
    gitUrl: "/",
    webUrl: "/"
  },
  {
    id: 3,
    title: "Corrosion Detecion using Machine Learning",
    description: "Project 3 description",
    imgUrl: "/imgUrls/projects/3.png",
    gitUrl: "/",
    webUrl: "/"
  },
  {
    id: 4,
    title: "NLP Prediction with mBERT",
    description: "Project 4 description",
    imgUrl: "/imgUrls/projects/4.png",
    gitUrl: "/",
    webUrl: "/"
  },
  {
    id: 5,
    title: "Discord Bot",
    description: "Authentication and CRUD operations",
    imgUrl: "/imgUrls/projects/5.png",
    gitUrl: "/",
    webUrl: "/"
  },
  {
    id: 6,
    title: "Food Scanner",
    description: "Project 6 description",
    imgUrl: "/imgUrls/projects/6.png",
    gitUrl: "/",
    webUrl: "/"
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <Section id="Projects">
      <div className="flex flex-col text-left justify-between pt-8 relative">

        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>

        <ul
          ref={ref}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-start"
        >
          {projectsData.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="max-w-sm mx-auto w-full"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                gitUrl={project.gitUrl}
                webUrl={project.webUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Projects;
