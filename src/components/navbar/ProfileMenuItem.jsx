import Link from "next/link";
import React from "react";

function ProfileMenuItem({ name, onClick = () => {} }) {
  return (
    <Link
      href="/#"
      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
    >
      <div>
        <p className="text-sm">{name}</p>
      </div>
    </Link>
  );
}

export default ProfileMenuItem;
