import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import Mosaic from "../Mosaic";

const projects = [
  {
    id: 1,
    title: "Project 1",
    tech: "JS",
    description: "A project",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 2,
    title: "Project 2",
    tech: "JS",
    description: "A project",
    colSpan: 2,
    rowSpan: 2,
  },
];
export default function IT() {
  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <p className="font-bold text-inherit">SEBASTIANS</p>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4" justify="center">
          <NavbarItem>JS</NavbarItem>
          <NavbarItem>Other</NavbarItem>
          <NavbarItem>Main Dishes</NavbarItem>
          <NavbarItem>Deserts</NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-screen w-full">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            className={`col-span-${project.colSpan} row-span-${project.rowSpan}`}
          >
            <Mosaic></Mosaic>
          </motion.div>
        ))}
      </div>
    </>
  );
}
