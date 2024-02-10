//react stuff
import { useState } from "react";

// NextUiStuff
import { NextUIProvider } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";

import "./App.css";

//Pages
import Menu from "./pages/Menu";
import IT from "./pages/IT";

function App() {
  const [isMenuPage, setIsMenuPage] = useState(true);

  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <Switch
          size="lg"
          onClick={() => {
            setIsMenuPage(!isMenuPage);
          }}
        ></Switch>
        {isMenuPage ? <IT /> : <Menu />}
      </main>
    </NextUIProvider>
  );
}

export default App;
