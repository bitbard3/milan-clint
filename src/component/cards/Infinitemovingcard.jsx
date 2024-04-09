import React from "react";
import Marquee from "react-fast-marquee";
import { cardsData } from "./cardData";

function Infinitemovingcard() {
  return (
    <div>
      <Marquee>
        <div className="flex m-2 ">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="w-[280px] h-[350px] flex flex-col items-center border card-shadow border-dark mt-[20px] rounded-lg mx-3 px-3"
            >
              <div className="flex w-full justify-between items-center mt-3 mb-1.5">
                <div className="px-5 py-0.5 rounded-lg bg-main flex items-center justify-center">
                  <p className="text-white text-lg mt-1">{card.views}</p>
                </div>
                <div className="px-5 py-0.5 rounded-lg bg-red-500 flex items-center justify-center">
                  <p className="text-white text-lg mt-1">Live</p>
                </div>
              </div>
              <div className=" w-[95%] flex justify-center">
                <img
                  src={card.image}
                  className="h-[180px] w-full m-2 object-cover rounded-xl bg-black"
                />
              </div>
              <div className="mr-auto ml-2 mt-5">
                <p className="text-dark text-2xl"><span className="text-neutral-500 mr-2">Name</span> <span className="font-medium">{card.name}</span></p>
                <p className="text-dark text-2xl mt-1"><span className="text-neutral-500 mr-6">City</span> <span className="ml-1 font-medium">{card.city}</span></p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Infinitemovingcard;
