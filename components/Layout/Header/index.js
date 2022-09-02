import React from "react";
import User from "./User";

function Header() {
  return (
    <div className="bg-white h-[68px] w-full flex justify-end items-center shadow-md sticky top-0 px-7 z-30">
      {/* <div className="text-3xl font-semibold text-blue-600">Logo</div> */}
      <User />
    </div>
  );
}

export default Header;
