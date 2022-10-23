import React from "react";
import TopNav from "./topNav";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <TopNav />
      <Navbar />
    </div>
  );
};

export default Header;
