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
  const Dishes = {
    link: "https://firebasestorage.googleapis.com/v0/b/sebastianskillset.appspot.com/o/ItalianEntryjpg.jpg?alt=media&token=d86d690d-250f-4332-972f-c46dde238012",
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <InView as="div" onChange={(inView, entry) => setIsVisible(inView)}>
      <CardEntry
        imageUrl={Dishes.link}
        title="Dish Title"
        description="Dish Description"
        isVisible={isVisible}
      />
    </InView>
  );
}
