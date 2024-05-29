import { signOut } from "next-auth/react";

function LogoutMenuItem({ name }) {
  return (
    <button
      onClick={signOut}
      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
    >
      <div>
        <p className="text-sm">{name}</p>
      </div>
    </button>
  );
}

export default LogoutMenuItem;
