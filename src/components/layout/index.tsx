import Image from "next/image";
import Sidebar from "../school/SideBar";
import NavBar from "../NavBar";

const Layout = ({ component }: any) => {
  return (
    <>
      <div className="lg:flex w-screen overflow-hidden h-screen bg-[#eaf3fd]">
        <div className="hidden lg:block bg-white w-80 h-screen">
          <Sidebar />
        </div>

        <div className="w-full  bg-[#EAF3FD]  py-5 lg:py-0 ">
          <div className="w-full hidden lg:block">{<NavBar/>}</div>
          <div className=" w-full max-h-screen no-scrollbar overflow-y-auto pb-16">
            {component}
            <div className="lg:hidden mb-8 md:mb-12 flex justify-center border-t bg-white border-gray-200 shadow-md gap-2 shadow-gray-200 py-4 ">
              <div className="text-[#1F3D94] text-xs opacity-50">
                Powered by
              </div>
              {/* <Image
                src={"/CapitalSetulcon.png"}
                height={16}
                width={18}
                objectFit="contain"
              />
              <Image
                src={"/CapitalSetutextIcon.png"}
                height={16}
                width={90}
                objectFit="contain"
              /> */}
            </div>
          </div>
        </div>
        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </>
  );
};

export default Layout;
