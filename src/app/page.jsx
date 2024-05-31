import { redirect } from "next/navigation.js";
import { auth } from "../../auth.js";
import { formatSlug } from "./utils/formatSlug.js";
import MaxWidthWrapper from "@/components/MaxWidthWrapper.jsx";
import { Button } from "@/components/ui/button.jsx";

// Utils
import Link from "next/link.js";

export const metadata = {
  title: "Tasky | Home",
  description:
    "Tasky is a simple and powerfull project management kanban platform. ",
};

export default async function Home() {
  const session = await auth();

  if (session && session.user) {
    redirect(formatSlug(`/u/${session?.user?.name}/boards`));
  }

  return (
    <MaxWidthWrapper>
      <main className="flex-[79.74%] bg-gradient-to-l from-[#ffda64] to-[#f0419c] min-h-screenNav">
        <div className="flex px-10 justify-center py-4 pt-20">
          <section className="flex-1 max-w-[460px]">
            <h1 className="text-5xl font-bold text-white">
              Tasky brings all your tasks, teammates, and tools together
            </h1>
            <h4 className="mt-2 text-darkGreen font-medium text-lg">
              Keep everything in the same place—even if your team isn&#39;t.
            </h4>
            <section>
              <Link href="/signin">
                <Button
                  type="submit"
                  className="mt-4 py-3 px-6 bg-lightGreen text-base text-black hover:bg-darkGreen hover:text-white"
                >
                  Get Started, it&#39;s free
                </Button>
              </Link>
            </section>
          </section>
          <section className="flex-1 max-w-[500px]">
            <img
              src="/images/trello-hero-image.webp"
              alt="trello-hero-image"
              className="max-h-[550px] object-contain"
            />
          </section>
        </div>
      </main>
    </MaxWidthWrapper>
  );
}
