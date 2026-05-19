import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-cols-[14rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <SideBar />
      <main className="bg-gray-50 overflow-scroll p-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
