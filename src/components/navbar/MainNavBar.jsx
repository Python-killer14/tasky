import React from "react";
import SidebarCategoryList from "../sidebar/SidebarCategoryList";
import NavbarMenuItem from "./NavbarMenuItem";
import Image from "next/image";
import Link from "next/link";

function MainNavBar() {
  return (
    <aside className="flex border-b px-4 py-2 border-gray-300 sticky top-0 bg-white">
      <Link href="/">
        <Image
          src="/images/tasky-lightgreen-logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-[110px]"
        />
      </Link>
      <div>
        <NavbarMenuItem />
      </div>
    </aside>
  );
}

export default MainNavBar;
