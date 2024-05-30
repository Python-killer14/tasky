import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MainSidebarNav from "@/components/sidebar/MainSidebarNav";
import SidebarWrapper from "@/components/sidebar/SidebarWrapper";

function layout({ children }) {
  return (
    <div>
      {/* <MaxWidthWrapper> */}
      <main className="flex items-start gap-3 h-[calc(100vh-53px)]">
        {/* <MainSidebarNav /> */}
        <SidebarWrapper />
        {children}
      </main>
      {/* </MaxWidthWrapper> */}
    </div>
  );
}

export default layout;
