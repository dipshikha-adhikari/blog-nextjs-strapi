"use client";
import { useTheme } from "next-themes";
import { CSSProperties, ReactNode } from "react";

interface ContentLayoutProps {
  children: ReactNode;
  style?: CSSProperties & {
    "--light-background"?: string;
    "--dark-background"?: string;
  };
}

const ContentLayout = ({ children, style }: ContentLayoutProps) => {
  const { theme } = useTheme();
  const bg =
    theme === "dark" ? "var(--dark-background)" : "var(--light-background)";
  return (
    <div
      className={` p-sm md:p-md xl:p-xl`}
      style={{
        ...style,
        background: bg, // Default to light background
      }}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
