import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1200px] mx-auto p-sm">{children}</div>;
};

export default Layout;
