//react stuff
import { useState } from "react";

// NextUiStuff
import { NextUIProvider } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";

//icons
import { FaSun, FaMoon } from "react-icons/fa";

//Pages
import Menu from "./pages/Menu";
import IT from "./pages/IT";

function App() {
  const [isMenuPage, setIsMenuPage] = useState(true);
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <NextUIProvider>
      <main
        className={
          isLightTheme
            ? "light"
            : "dark" + " text-foreground bg-background flex flex-col text-base"
        }
      >
        <div className="flex justify-between">
          <div>
            <Switch
              size="lg"
              onClick={() => {
                setIsMenuPage(!isMenuPage);
              }}
            ></Switch>
          </div>
          <div>
            <Switch
              size="lg"
              onClick={() => {
                setIsLightTheme(!isLightTheme);
              }}
            >
              {isLightTheme ? <FaSun /> : <FaMoon />}
            </Switch>
          </div>
        </div>
        <div className="flex-grow text-base">
          {isMenuPage ? <IT /> : <Menu />}
        </div>
      </main>
    </NextUIProvider>
  );
}

export default App;
