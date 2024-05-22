import { CSSProperties, ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
  style?: CSSProperties;
}

const Content = ({ children, style }: ContentProps) => {
  return (
    <div
      className={` max-w-7xl w-full p-sm sm:px-md md:px-xl  mx-auto`}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Content;
