import MainSideBar from "./partials/main-side-bar";
import TopBar from "./partials/top-bar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
        <MainSideBar />
        <div className="flex-1">
            <TopBar />
            <main className="p-4 bg-[#F6F7FA]">{children}</main>
        </div>
    </div>
  );
};

export default MainLayout;
