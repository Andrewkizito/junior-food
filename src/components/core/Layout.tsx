import React from "react";

//Importing core components
import Header from "./Header";

type LayoutProps = {
  children: any;
  title: String;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
