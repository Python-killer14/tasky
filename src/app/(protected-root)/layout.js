import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MainNavBar from "@/components/navbar/MainNavBar";
import MainSidebarNav from "@/components/sidebar/MainSidebarNav";

function layout({ children }) {
  return (
    <div>
      <main className="flex items-start gap-3 h-full">
        <MainSidebarNav />
        {children}
      </main>
    </div>
  );
}

export default layout;
