import { useEffect } from "react";
import { Link } from "@nextui-org/react";

import { motion, useAnimation } from "framer-motion";

const projects = [
  {
    id: 2,
    title: "Toolkit for Advanced Computer Graphic",
    tech: "Tauri, React, Rust",
    description:
      "Minimalist computer graphics application developed using Tauri and React. It encompasses a suite of algorithms for image processing and vector graphics, including filters, 3D projections of spheres with lighting effects, and vector graphics manipulation. The implementation leverages the efficiency of rust for Pixels , vector and 3D were implemented in JS",
    colSpan: 2,
    rowSpan: 1,
    link: "https://github.com/SEbastianSpin/comg",
  },

  {
    id: 1,
    title: "Web app",
    tech: "React, Mui & Firebase ",
    description:
      "Dynamic web application built with React and Firebase, offering secure authentication, role-based access, data collections filtering and display of user on the map  . It enables efficient data collection, filtering, and display, tailored to user roles and permissions. With its integration of Firebase's database and authentication services",
    colSpan: 1,
    rowSpan: 2,
    link: "https://alzheimer-6788.web.app/",
  },

  {
    id: 7,
    title: "Pong Game",
    tech: "C++",
    colSpan: 3,
    rowSpan: 3,
    link: "https://github.com/SEbastianSpin/PONG",
  },

  {
    id: 6,
    title: "Embedded system Music Player",
    tech: "Linux, Buildroot, Python",
    colSpan: 2,
    rowSpan: 1,
    link: "https://github.com/SEbastianSpin/nodeQR",
    description:
      "Music player for embedded systems  with a web interface and the use buttons for control",
  },

  {
    id: 3,
    title: "MiniPaint",
    tech: "C#",
    description: "A Simple Windows Forms Paint Application in C#",
    colSpan: 3,
    rowSpan: 3,
    link: "https://github.com/SEbastianSpin/MiniPaint",
  },

  {
    id: 4,
    title: "Agent Systems",
    tech: "Java & Jade",
    description:
      "Complex Map Navigation and Race Condition Management for Autonomous Agents in JADE",
    colSpan: 2,
    rowSpan: 2,
    link: "https://github.com/SEbastianSpin/AgentCoalition",
  },

  {
    id: 5,
    title: "QR Code Generator",
    tech: "Node JS",
    colSpan: 3,
    rowSpan: 2,
    link: "https://github.com/SEbastianSpin/nodeQR",
    description: "Discord for input and output of QR codes",
  },

  //
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
        return "sm:w-1/2";
      case 2:
        return "sm:w-1/4";
      case 3:
        return "sm:w-1/8";
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
      case 3:
        return "h-24";
      default:
        return "h-auto";
    }
  };

  return (
    <>
      {/* <Navbar shouldHideOnScroll>
        <NavbarBrand>SEBASTIANS</NavbarBrand>
        <NavbarContent>
          <NavbarItem>JS</NavbarItem>
          <NavbarItem>Other</NavbarItem>
          <NavbarItem>Main Dishes</NavbarItem>
          <NavbarItem>Deserts</NavbarItem>
        </NavbarContent>
      </Navbar> */}

      <div className="flex flex-col justify-center ">
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
