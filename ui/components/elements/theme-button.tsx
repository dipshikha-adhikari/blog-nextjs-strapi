import { useTheme } from "next-themes";
import React from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex cursor-pointer items-center"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "light" ? (
        <RiMoonLine className="text-2xl" />
      ) : (
        <RiSunLine className="text-2xl" />
      )}
    </div>
  );
};

export default ThemeButton;
