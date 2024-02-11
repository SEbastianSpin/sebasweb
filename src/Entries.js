import { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Card, CardBody, Image } from "@nextui-org/react";

// function CardEntry({ imageUrl, title, description, isVisible }) {
//   const cardVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       animate={isVisible ? "visible" : "hidden"}
//       variants={cardVariants}
//       style={{
//         flex: "1 0 calc(20% - 2%)",
//         maxHeight: "600px", // Set a maximum height for the card
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <Card>
//         <Image
//           isZoomed
//           width="90%"
//           height="auto"
//           style={{ maxHeight: "250px", objectFit: "cover" }}
//           src={imageUrl}
//           alt=""
//         />
//         <CardBody>
//           <h2 className="text-xl font-bold mb-4">{title}</h2>
//           <p>{description}</p>
//         </CardBody>
//       </Card>
//     </motion.div>
//   );
// }

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
      <div className="flex flex-wrap">
        {Dishes.map((dish) => (
          <motion.div
            key={dish.name}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            style={{
              flex: "1 2 calc(20% - 1vw)",
              maxHeight: "600px", // Apply the same max height here
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Card>
              <Image
                isZoomed
                width="100%"
                height="auto" // Adjust height to auto
                style={{ maxHeight: "250px", objectFit: "cover" }} // Enforce max height and object-fit here as well
                src={dish.imageUrl}
                alt=""
              />
              <CardBody>
                <h2 className="text-xl font-bold mb-4">{dish.title}</h2>
                <p>{dish.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </InView>
  );
}
