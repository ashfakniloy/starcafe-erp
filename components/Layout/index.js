import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import PageHeading from "./PageHeading";

function Layout({ children, heading }) {
  const [showMenu, setShowMenu] = useState(true);

  const { pathname } = useRouter();

  if (pathname.includes("/admin")) {
    return (
      <div className="flex">
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

        <div className="flex-1">
          <Header />

          <div className="p-7">
            <PageHeading />

            {children}
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default Layout;
