import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className=" p-sm md:px-md  xl:px-xl">{children}</div>;
};

export default Layout;
