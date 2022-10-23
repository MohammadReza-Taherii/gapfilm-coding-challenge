import React, { useEffect, useState } from "react";
import SideBar from "./sideBar";
import FirstList from "./firstList";

const MainPage = () => {
  return (
    <div className="flex flex-row container mx-auto flex-1 gap-x-5">
      <div className="basis-1/5">
        <SideBar />
      </div>
      <div className="basis-4/5">
        <FirstList />
      </div>
    </div>
  );
};

export default MainPage;
