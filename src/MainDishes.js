import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Card, CardBody, Image } from "@nextui-org/react";

function CardEntry({ imageUrl, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Card>
        <Image isZoomed width={800} src={imageUrl} classNames="m-3" />
        <CardBody>
          <h2 className="text-m font-bold mb-4">{title}</h2>
          <p>{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default function MainDishes() {
  const menuItems = [
    {
      title: "Vegan Tantanmen Ramen",
      description:
        "Spicy ramen with vegan broth, tofu, and assorted vegetables.",
      imageUrl: "",
    },
    {
      title: "Cevichocho Ecuatoriano",
      description:
        "Ecuadorian-inspired ceviche with chayote, corn, and plant-based protein.",
      imageUrl: "",
    },
    {
      title: "Pad Thai Vegan",
      description:
        "Classic Pad Thai with rice noodles, tofu, peanuts, and lime.",
      imageUrl: "",
    },
    {
      title: "Pho Vegan",
      description:
        "Vietnamese noodle soup with aromatic vegan broth, rice noodles, and herbs.",
      imageUrl: "",
    },
    {
      title: "Fried Rice",
      description:
        "Stir-fried rice with mixed vegetables and tofu or plant-based protein.",
      imageUrl: "",
    },
    {
      title: "Paneer Makhani",
      description:
        "Indian curry with tomato-based sauce, paneer, and aromatic spices.",
      imageUrl: "",
    },

    {
      title: "Arepas",
      description:
        "Corn-based flatbread with a variety of fillings, such as cheese, beans, and avocado.",
      imageUrl: "",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <InView triggerOnce={true}>
      {({ inView }) => (
        <div className="flex wfull  flex-col">
          {menuItems.map((item, index) => (
            <CardEntry
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
              fullWidth
            />
          ))}
          {isVisible}
        </div>
      )}
    </InView>
  );
}
