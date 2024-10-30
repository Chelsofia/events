import React from "react";

const Text = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between py-24">
      
      <div className="order-1 md:order-2 text-center md:text-right max-w-md mx-auto  p-4">
        <h1 className="text-5xl font-bold">
          Imagine if{" "}
          <span className="bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-transparent bg-clip-text">
            Snapchat
          </span>{" "}
          had events.
        </h1>
        <p className="text-xl my-5 text-[#4F4F4F]">
          Easily host and share events with your friends across any social
          media.
        </p>
        <button className="mt-5 bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white rounded-md py-3 px-12 text-base cursor-pointer">
          🎉 Create my event
        </button>
      </div>
    </div>
  );
};

export default Text;
