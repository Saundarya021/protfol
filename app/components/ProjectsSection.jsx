// "use client";
// import React, { useState, useRef } from "react";
import React from "react";
import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
// import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: " Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/prot..png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Restaurant Website",
    description: "Project 2 description",
    image: "/images/projects/rest.png.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://restaurant-website-seven-pi.vercel.app/",
  },
  {
    id: 3,
    title: "Simon game",
    description: "Project 3 description",
    image: "/images/projects/game.png.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://saundarya021.github.io/Memory-game/",
  },
  {
    id: 4,
    title: "Job Hunt Website",
    description: "Project 4 description",
    image: "/images/projects/jobs.png.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://saundarya021.github.io/Jobshunt/",
  },
  {
    id: 5,
    title: "Calculator",
    description: "Authentication and CRUD operations",
    image: "/images/projects/calc.png.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://calculator1-mocha.vercel.app/",
  },
];

const ProjectsSection = () => {
  // const [tag, setTag] = useState("All");
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  // const handleTagChange = (newTag) => {
  //   setTag(newTag);
  // };

  // const filteredProjects = projectsData.filter((project) =>
  //   project.tag.includes(tag)
  // );

  // const cardVariants = {
  //   initial: { y: 50, opacity: 0 },
  //   animate: { y: 0, opacity: 1 },
  // };

  return (
   <>
   <section id="projects">
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      My Projects
    </h2>
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      {projectsData.map((project) => (
          <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          />
        ))}
    </div>
    </section>
   </>
  );
};
export default ProjectsSection;
