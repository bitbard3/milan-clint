import React from "react";
import hero from '../../assets/images/hero.svg'
function Header() {
  return (
    <>
      <div className="w-[100vw]  md:h-[600px] h-[80vh] relative">
        <div className="flex h-full flex-col text-center justify-start py-20 gap-y-16 items-center">
          <h2 className="text-dark font-medium text-5xl">
            Apno ko Apno <br />
            se <div className="relative inline-block">milaye
              <div className="h-[75%] w-[75%] rounded-full -z-10 bg-[#BAEEB9] -rotate-[6deg] bottom-1.5 right-0  absolute"></div>
            </div>
          </h2>
          <div className="pl-10 h-fit">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
