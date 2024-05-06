import { useTheme } from "next-themes";
import React from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center">
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      >
        {theme === "light" ? (
          <RiMoonLine fontSize={30} />
        ) : (
          <RiSunLine fontSize={30} />
        )}
      </button>
    </div>
  );
};

export default ThemeButton;
