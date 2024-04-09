import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CountUp from "react-countup";
import ScrollTriggerComponent from "react-scroll-trigger";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from "../footer/Footer";
import Live from "../live/Live";
import Header from "../header/Header";
import { InfiniteMovingCardsDemo } from "../cards/InfiniteMovingCardsDemo";

function Main() {
  const [counter, setCounter] = useState(false);
  return (
    <div>
      <Header />
      <div className="md:w-[80vw] w-full h-fit md:h-[100vh]">
        <div className="md:w-[80vw] w-full h-fit md:h-[100vh]">
          <div className="text-center">
            <p className="text-dark font-medium text-4xl pb-3">Uniting People</p>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-[100vw] h-[100%] mt-1 "
          >
            <div>
              <SwiperSlide>
                <img
                  src="/images/image11.jpg"
                  alt="Thanks"
                  className="block w-[100%] h-[100%] md:object-stretch md:object-center"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/istockphoto.jpg"
                  className="block w-[100%] h-[100%] md:object-stretch md:object-center"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/image7.jpg"
                  className="block w-[100%] h-[100%] md:object-stretch md:object-center"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/chacha.jpg"
                  className="block w-[100%] h-[100%] md:object-stretch md:object-center"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/image4.jpg"
                  className="block w-[100%] h-[100%] md:object-stretch md:object-center"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/image5.jpg"
                  className="block w-[100%] h-[100%] md:object-stretch md:object-center"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/image6.jpg"
                  className="block w-[100%] h-[100%] md:object-stretch md:object-center"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/image3.jpg"
                  className="block w-[100%] h-[100%] md:object-stretch md:object-center"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/image10.jpg"
                  className="block w-[100%] h-[100%] md:object-stretch md:object-center"
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="grid place-items-center w-screen h-[700px] bg-white ">
          <InfiniteMovingCardsDemo />
          <div className=" flex text-dark items-center pl-7 pr-5 space-x-10 w-full">
            <div className="text-center">
              <ScrollTriggerComponent
                onEnter={() => setCounter(true)}
                onExit={() => setCounter(false)}
              >
                <span className=" text-5xl font-bold md:text-4xl lg:text-5xl">
                  {counter && (
                    <CountUp start={0} end={10} duration={2} delay={0} />
                  )}
                  K
                </span>
              </ScrollTriggerComponent>
              <p className="text-lg md:text-xl lg:text-2xl text-blue-500">
                Live users
              </p>
            </div>
            <div className="text-center">
              <ScrollTriggerComponent
                onEnter={() => setCounter(true)}
                onExit={() => setCounter(false)}
              >
                <span className="text-5xl font-bold md:text-4xl lg:text-5xl">
                  {counter && (
                    <CountUp start={0} end={50} duration={2} delay={0} />
                  )}
                  K
                </span>
              </ScrollTriggerComponent>
              <p className="text-lg md:text-xl lg:text-2xl text-blue-500">
                Happy users
              </p>
            </div>
            <div className="text-center">
              <ScrollTriggerComponent
                onEnter={() => setCounter(true)}
                onExit={() => setCounter(false)}
              >
                <span className="text-5xl font-bold md:text-4xl lg:text-5xl">
                  {counter && (
                    <CountUp start={0} end={20} duration={2} delay={0} />
                  )}
                  +
                </span>
              </ScrollTriggerComponent>
              <p className="text-lg md:text-xl lg:text-2xl text-blue-500">
                Cities
              </p>
            </div>
          </div>
        </div>
        <Live />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
