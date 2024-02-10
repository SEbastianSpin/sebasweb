import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Drinks from "../Drinks";
import Entries from "../Entries";
import MainDishes from "../MainDishes";

const AnimatedDiv = motion.div;

export default function Menu() {
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

  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavbarContent className="sm:flex gap-4 justify-center items-center">
          <NavbarItem>Drinks</NavbarItem>
          <NavbarItem>Entries</NavbarItem>
        </NavbarContent>

        <NavbarBrand
          justify="center"
          className="flex justify-center items-center"
        >
          <p className="font-bold text-inherit text-4xl">SEBASTIANS</p>
        </NavbarBrand>

        <NavbarContent className="sm:flex gap-4 justify-center items-center">
          <NavbarItem>Main Dishes</NavbarItem>
          <NavbarItem>Deserts</NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="w-full h-screen">
        <AnimatedDiv
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-6xl text-center"
        >
          {"Dish Presentation Disclaimer.".split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </AnimatedDiv>
      </div>
      <div className="w-full h-screen">
        <h1 className="text-6xl font-extrabold text-center pt-16">Div 2</h1>
        <Drinks></Drinks>
      </div>
      <div className="w-full h-screen">
        <h1 className="text-6xl font-extrabold text-center pt-16">Div 3</h1>
        <Entries />
      </div>
      <div className="w-full h-screen">
        <h1 className="text-6xl font-extrabold text-center pt-16">Div 4</h1>
        <MainDishes />
      </div>
      Photo by{" "}
      <a href="https://unsplash.com/@paster9611?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Tiffany Nguyen
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/photos/pink-flower-1dvIeM57k3I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
      Photo by{" "}
      <a href="https://unsplash.com/@khlebnikovayulia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Yulia Khlebnikova
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/photos/honey-jar-EZlAKT3x3pg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
      Photo by{" "}
      <a href="https://unsplash.com/@cieloadentro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Roksolana Zasiadko
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/photos/closeup-photography-of-red-cherry-CR28Ot0ckaE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
      Photo by{" "}
      <a href="https://unsplash.com/@zachinglis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Zach Inglis
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/photos/macro-photography-of-raspberry-fruits-t0A2NCMhXRQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
      Photo by{" "}
      <a href="https://unsplash.com/@sebastiancoman?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Sebastian Coman Photography
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/photos/sliced-fruit-on-white-ceramic-plate-UE7YA2igrxQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
    </>
  );
}
