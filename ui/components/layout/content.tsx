"use client";
import { useTheme } from "next-themes";
import { CSSProperties, ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
  style?: CSSProperties & {
    "--light-background"?: string;
    "--dark-background"?: string;
    "--light-color"?: string;
    "--dark-color"?: string;
    "--max-width"?: string;
  };
}

const Content = ({ children, style }: ContentProps) => {
  const { theme } = useTheme();
  const maxWidth = style?.["--max-width"] || "1400px";
  const bg =
    theme === "dark" ? "var(--dark-background)" : "var(--light-background)";
  return (
    <div
      className={` p-sm md:p-md xl:p-xl   mx-auto`}
      style={{
        ...style,
        background: bg,
        maxWidth, // Default to light background
      }}
    >
      {children}
    </div>
  );
};

export default Content;
