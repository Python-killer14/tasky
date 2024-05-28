import { auth } from "../../auth";

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
