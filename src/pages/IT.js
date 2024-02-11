import { useEffect } from "react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { motion, useAnimation } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Web app",
    tech: "React, Mui & Firebase ",
    description:
      "Secure scalable web app to collect data and display it in a Map with powerful filters using auth and firestore.",
    colSpan: 1,
    rowSpan: 1,
    link: "https://alzheimer-6788.web.app/",
  },
  {
    id: 2,
    title: "Computer Graphics",
    tech: "Tauri, React, Rust",
    description:
      "A project to learn about computer graphics includes vector  pixels  and 3D rendering low level algorithms implements in rust or JS",
    colSpan: 2,
    rowSpan: 2,
  },

  {
    id: 3,
    title: "MiniPaint",
    tech: "C#",
    description: "As the name says",
    colSpan: 3,
    rowSpan: 1,
    link: "https://github.com/SEbastianSpin/MiniPaint",
  },

  {
    id: 4,
    title: "Agent Systems",
    tech: "Java & Jade",
    description:
      "Implementing agent systems that can move by themself to reach a target and form a group",
    colSpan: 2,
    rowSpan: 2,
    link: "https://github.com/SEbastianSpin/AgentCoalition",
  },
];

const AnimatedDiv = motion.div;

export default function IT() {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };
  const controls = useAnimation();
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const getWidth = (colSpan) => {
    switch (colSpan) {
      case 1:
        return "w-1/2";
      case 2:
        return "w-1/4";
      case 3:
        return "w-1/8";
      default:
        return "w-full";
    }
  };

  const getHeight = (rowSpan) => {
    switch (rowSpan) {
      case 1:
        return "h-96";
      case 2:
        return "h-48";
      default:
        return "h-auto";
    }
  };

  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>SEBASTIANS</NavbarBrand>
        <NavbarContent>
          <NavbarItem>JS</NavbarItem>
          <NavbarItem>Other</NavbarItem>
          <NavbarItem>Main Dishes</NavbarItem>
          <NavbarItem>Deserts</NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="flex flex-col justify-center h-screen">
        <AnimatedDiv
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-6xl text-center"
        >
          {"Hey  Welcome to my site here you can check things I've done. "
            .split("")
            .map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ fontSize: "0.8em" }}
              >
                {char}
              </motion.span>
            ))}
        </AnimatedDiv>

        <div className="flex flex-wrap justify-center items-start m-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`m-2 p-4 shadow-lg ${getWidth(
                project.colSpan
              )} ${getHeight(project.rowSpan)} flex flex-col justify-between`}
            >
              <Link href={project.link}>
                <h2 className="text-xl font-bold">{project.title}</h2>
              </Link>
              <p>{project.description}</p>
              <span className="text-sm text-gray-500">{project.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
