import React from "react";

const EventCard = () => {
  return (
    <div className="bg-[#FBFAFF] rounded-lg  sm:w-3/4 md:w-1/2 lg:w-96 p-4 ml-16 shadow-lg mx-5 mb-5">
      <div className="event-image">
        <img
          src="/image/fix.png"
          alt="Event"
          className="w-full h-40 md:h-52 lg:h-60 rounded-lg object-cover"
        />
      </div>

      <div className="pt-3">
        <h1 className="font-bold text-lg md:text-xl">Movie Night</h1>
        <p className="text-gray-500">
          👋 Hosted by <span className="font-semibold"> Elysia</span>
        </p>

        <div className="my-3 flex items-center justify-between text-sm bg-white rounded-md p-2">
          <div>
            <span className="ml-1 font-semibold">14 responses</span> ·{" "}
            <a href="#" className="text-[#8456EC] no-underline">
              see guests
            </a>
          </div>
          <button className="bg-[#8456EC] text-white rounded-md p-2 cursor-pointer text-sm px-4 font-semibold">
            🤝 Invite
          </button>
        </div>

        <div className="mt-3 text-sm space-y-3">
          <div className="flex items-start">
            <div className="bg-white rounded-md p-2 border mr-2">&nbsp;📅</div>
            <div>
              <span className="font-semibold block">18 August 6:00PM</span> to
              <span className="font-semibold"> 19 August 1:00PM </span> UTC +10
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white rounded-md p-2 border mr-2">
              &nbsp;📍&nbsp;
            </div>
            <div>
              <span className="font-semibold block">Street Name</span>
              <span>301 Rowes Lane, WA, 7183</span>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white rounded-md p-2 border mr-2">🔗</div>
            <div>
              <span className="font-semibold block">Link</span>
              <a
                href="https://netflix.com"
                className="text-[#8456EC] no-underline"
              >
                netflix.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
