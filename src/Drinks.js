import { Tabs, Tab, Card, CardBody, Image } from "@nextui-org/react";
export default function Drinks() {
  return (
    <div className="flex w-full flex-col items-center">
      <Tabs aria-label="Options of drinks" size={"lg"}>
        <Tab key="hot" title="Hot Chocolate" className="flex flex-wrap">
          <Card isFooterBlurred radius="lg" className="border-none">
            <h1 className="center">Roses</h1>
            <Image
              isBlurred
              width={250}
              src="https://firebasestorage.googleapis.com/v0/b/sebastianskillset.appspot.com/o/rose.jpg?alt=media&token=6431a897-4cb1-4e55-b25f-10e279dd3625"
              alt="Rose Coffe"
              classNames="m-5"
            />
          </Card>

          <Card isFooterBlurred radius="lg" className="border-none">
            <h1 className="center">Caramel</h1>
            <Image
              isBlurred
              width={250}
              src="https://firebasestorage.googleapis.com/v0/b/sebastianskillset.appspot.com/o/caramel.jpg?alt=media&token=f0bd4f72-3308-4abb-a581-c68d61c318c9"
              alt="Carmel"
              classNames="m-5"
            />
          </Card>

          <Card isFooterBlurred radius="lg" className="border-none">
            <h1 className="center">Cherry</h1>
            <Image
              isBlurred
              width={250}
              src="https://firebasestorage.googleapis.com/v0/b/sebastianskillset.appspot.com/o/cerezas.jpg?alt=media&token=ff0c5eb7-4639-4a0a-b46e-40c1bf9a041a"
              alt="Cherry"
              classNames="m-5"
            />
          </Card>

          <Card isFooterBlurred radius="lg" className="border-none">
            <h1 className="center">Malina</h1>
            <Image
              isBlurred
              width={250}
              src="https://firebasestorage.googleapis.com/v0/b/sebastianskillset.appspot.com/o/raspberry.jpg?alt=media&token=22038617-1c58-480a-b3ca-f7c8dffff22c"
              alt="Raspberry"
              classNames="m-5"
            />
          </Card>
        </Tab>

        <Tab key="Alcoholic" title="Alcoholic Beverages">
          <Card>
            <CardBody>
              <h2 className="text-xl font-bold mb-4">Michelada</h2>
              <p>Beer, Salt & lime juice</p>
              <Image
                isBlurred
                width={250}
                classNames="m-5"
                src="https://firebasestorage.googleapis.com/v0/b/sebastianskillset.appspot.com/o/michelada.jpg?alt=media&token=872762ab-2794-4527-9880-d8c6b45a3a29"
              />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
