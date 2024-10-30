import React from "react";
import EventCard from "./EventCard";
import Text from "./Text";

const App = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row bg-[#F6F2FF] min-h-screen w-full mx-auto pt-20 items-center justify-center space-y-5 lg:space-y-0 lg:space-x-4">
      <div className="w-full lg:w-1/2">
        <EventCard />
      </div>
      <div className="w-full lg:w-1/2">
        <Text />
      </div>
    </div>
  );
};

export default App;
