import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-md mx-auto py-xl px-sm shadow-xl">{children}</div>
  );
}
