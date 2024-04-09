import React from "react";

function Footer() {
  return (
    <div className="bg-box md:w-[100vw] footer-box w-full h-[300px] md:h-[400px] flex py-5 px-5">
      <div className="w-[60%] h-full  flex flex-col">
        <p className="text-4xl font-medium text-dark pt-5">Miilan</p>
        <p className="text-sm text-dark opacity-80 pt-10">Address- 243 Wokingham Road,
          Earley, Reading, Banglore.</p>
        <div className="flex flex-col text-sm text-dark opacity-80 pt-5">
          <p>Helpline- +918303160798</p>
          <p>Helpline- +917897677046</p>
        </div>
      </div>
      <div className="w-[40%] h-full  flex flex-col text-2xl items-end text-main text-left">
        <p className="font-medium  pt-5">Home</p>
        <p className="font-medium  pt-3">Live</p>
        <p className="font-medium  pt-3">About</p>
        <div className="flex gap-x-3 mt-7 ">
          <p>
            <i className="bi bi-facebook"></i>
          </p>
          <p>
            <i className="bi bi-instagram"></i>
          </p>
          <p>
            <i className="bi bi-twitter"></i>
          </p>
          <p>
            <i className="bi bi-youtube"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
