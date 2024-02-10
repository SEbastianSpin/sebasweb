import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

function CardEntry({ imageUrl, title, description }) {
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <InView triggerOnce={true}>
      {({ inView, ref }) => (
        <CardEntry
          imageUrl={Dishes.link}
          title="Burrata, caramelized tomatoes & Focaccia"
          description="on olive oil with honey and a hint of lemon"
        />
      )}
    </InView>
  );
}
