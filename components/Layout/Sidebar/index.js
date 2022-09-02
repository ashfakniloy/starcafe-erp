import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
// import SubMenu from "./SubMenu";
import Menu from "./Menu";
import { adminLinks } from "./navlinks/adminLinks";

function Sidebar({ showMenu, setShowMenu, name }) {
  const router = useRouter();

  const [active, setActive] = useState("");

  return (
    // <div
    //   className={`h-screen bg-gray-700 z-20 duration-300 top-0 bottom-0 sticky sidebar overflow-y-scroll overflow-x-hidden text-white ${
    //     showMenu ? "w-[270px]" : "w-20"
    //   }`}
    // >
    <div
      className={`h-screen bg-custom-blue z-10 duration-300 top-0 bottom-0 sticky sidebar overflow-y-scroll   text-white w-[264px]
      `}
    >
      <div className="  items-center gap-10">
        <div className="text-white py-[16px] font-semibold">
          <h1 className=" pl-6 text-3xl">StarCafe</h1>
        </div>
        {/* <div className="py-[18px] px-6 bg-gradient-to-tr from-green-800 to-green-600 sticky top-0 z-20">
          <div className={" text-white  flex items-center gap-6"}>
            <span className="text-3xl">
              <MdSchool className="fill-white" />
            </span>
            <h4
              className={`text-xl transition duration-300 uppercase whitespace-nowrap font-semibold ${
                showMenu ? "opacity-100" : "opacity-0"
              }`}
            >
              school erp
            </h4>
          </div>
        </div> */}

        <div className="mt-3 mx-3">
          {adminLinks &&
            adminLinks.map((navLink, i) => (
              <Menu
                key={i}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                active={active}
                setActive={setActive}
                navLink={navLink}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
