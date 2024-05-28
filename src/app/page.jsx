import { auth } from "../../auth";

// export const metadata = {
//   title: "User's Work space | Tasky",
//   description:
//     "Tasky is a simple and powerfull project management kanban platform. ",
// };

export default async function Home() {
  const session = await auth();
  console.log("Session", session);
  return (
    <main className="flex-[79.74%]">
      <h1 className="font-medium text-[15px] text-black">Members</h1>
      <div className="">{session && <p>{session.user.name}</p>}</div>
    </main>
  );
}
