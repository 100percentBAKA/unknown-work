import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* // ! left part */}
      <div className="hidden lg:w-[50%] lg:h-full lg:flex items-center justify-center">
        <div className="h-[90%] w-[90%] rounded-[33px] shadow-xl bg-slate-300 flex items-center justify-center">
          <div className="font-semibold text-xl text-black">
            Say hello! to hassle-free employee management
          </div>
        </div>
      </div>

      {/* // ! right part */}
      <div className="w-full lg:w-[50%] lg:h-full flex flex-col items-center justify-center">
        <div className="w-[75%] h-[85%] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
