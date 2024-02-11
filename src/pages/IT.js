import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { Card } from "@nextui-org/react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Project 1" },
  { id: 2, title: "Project 2" },
  // Add more projects as needed
];

export default function IT() {
  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <p className="font-bold text-inherit">SEBASTIANS</p>
        </NavbarBrand>
        <NavbarContent className=" sm:flex gap-4" justify="center">
          <NavbarItem>JS</NavbarItem>

          <NavbarItem>Other</NavbarItem>

          <NavbarItem>Main Dishes</NavbarItem>

          <NavbarItem>Deserts</NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="flex flex-wrap justify-around">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.5 }}
          >
            <Card hoverable>
              <h3>{project.title}</h3>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}
