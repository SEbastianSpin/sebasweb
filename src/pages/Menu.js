import {
  Link,
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

  const textVariants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 3, staggerChildren: 0.25 },
    },
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
    <div className="text-base">
      <Navbar shouldHideOnScroll className="text-4xl">
        <NavbarContent className="sm:flex gap-4 justify-center items-center">
          <NavbarItem>
            <Link href="#drinks">Drinks</Link>
          </NavbarItem>
          <NavbarItem>Entries</NavbarItem>
        </NavbarContent>

        <NavbarBrand
          justify="center"
          className="flex justify-center items-center"
        >
          Sebastian Ǝspin
        </NavbarBrand>

        <NavbarContent className="sm:flex gap-4 justify-center items-center">
          <NavbarItem>
            <Link href="#maindishes">Main Dishes</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#deserts">Deserts</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="flex flex-col justify-center h-screen">
        <AnimatedDiv
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-6xl text-center"
        >
          {"Dish Presentation Disclaimer".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              style={{ fontSize: "4em" }}
            >
              {char}
            </motion.span>
          ))}
        </AnimatedDiv>

        <AnimatedDiv
          initial="hidden"
          animate={controls}
          variants={textVariants2}
          className="text-center"
          transition={{ delay: 2 }}
        >
          {"Flavor as Well".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              style={{ fontSize: "2em" }}
            >
              {char}
            </motion.span>
          ))}
        </AnimatedDiv>
      </div>
      <div className="w-full h-screen" id="drinks">
        <Drinks></Drinks>
      </div>
      <div className="w-full h-screen">
        <h1 className="text-6xl font-extrabold text-center pt-16">Entries</h1>
        <Entries />
      </div>
      <div className="w-full h-screen" id="maindishes">
        <h1 className="text-6xl font-extrabold text-center pt-16">
          Random Main Dishes
        </h1>
        <MainDishes />
      </div>
      <div
        className="w-full h-1/2 flex items-center justify-center"
        id="deserts"
      >
        <h1 className="text-6xl font-extrabold text-center">
          I don't know how to cook deserts. I will just but something from the
          store.
        </h1>
      </div>

      <div className="w-full h-1/2">
        Credis of the images Photo by{" "}
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
        Photo by{" "}
        <a href="https://unsplash.com/@mk__s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          mk. s
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/a-white-plate-topped-with-two-pastries-covered-in-sauce-2gR6FlQMyAo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
        Photo by{" "}
        <a href="https://unsplash.com/@twoluckyspoons?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Jodie Morgan
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/shallow-focus-photo-of-breads-PAa_MJztyUY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </div>
    </div>
  );
}
