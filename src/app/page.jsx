import { redirect } from "next/navigation.js";
import { auth } from "../../auth.js";
import { formatSlug } from "./utils/formatSlug.js";

export const metadata = {
  title: "Tasky | Home",
  description:
    "Tasky is a simple and powerfull project management kanban platform. ",
};

export default async function Home() {
  const session = await auth();

  // if (session && session.user) {
  //   redirect(formatSlug(`/u/${session?.user?.name}/boards`));
  // }

  return (
    <main className="flex-[79.74%]">
      <h1 className="font-medium text-[15px] text-black">Members</h1>
      <div className="">{session && <p>{session.user.name}</p>}</div>
    </main>
  );
}
