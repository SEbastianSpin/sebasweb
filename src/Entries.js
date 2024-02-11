import { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Card, CardBody, Image } from "@nextui-org/react";

function CardEntry({ imageUrl, title, description, isVisible }) {
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <Card className="w-96 mt-5">
        <Image isZoomed width={800} src={imageUrl} classNames="m-5" />
        <CardBody>
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <p>{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default function Entries() {
  const Dishes = [
    {
      name: "Caremelized",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/sebastianskillset.appspot.com/o/ItalianEntryjpg.jpg?alt=media&token=d86d690d-250f-4332-972f-c46dde238012",
      title: "Caremelized Tomato",
      description: " with Burrata in Olive Oil and honey with a hit on lemon",
    },

    {
      name: "Empanadas",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/sebastianskillset.appspot.com/o/empanadas.jpg?alt=media&token=c8155b44-8708-4825-8c3b-e851ee61d0dc",
      title: "Empanadas de verde",
      description:
        "Platain Empanadas with a filling of your choice, served with a side of avocado* and aji sauce",
    },

    {
      name: "Biscuits",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/sebastianskillset.appspot.com/o/Bisquits.jpg?alt=media&token=1c6fab3b-3aa2-4049-bf29-cabda6970344",
      title: "Southern Biscuits",
      description:
        "Buttermilk biscuits with fries, fake chicken  and hot sauce",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  return (
    <InView as="div" onChange={(inView, entry) => setIsVisible(inView)}>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {Dishes.map((dish) => {
          return (
            <div style={{ width: "400px", height: "400px" }}>
              <CardEntry
                imageUrl={dish.imageUrl}
                title={dish.title}
                description={dish.description}
                isVisible={isVisible}
              />
            </div>
          );
        })}
      </div>
    </InView>
  );
}
