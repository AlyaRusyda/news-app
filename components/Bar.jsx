import React from "react";
import TodayDate from "./Date";
import Sosmed from "./Sosmed";
import Weather from "./Weather";

const Bar = () => {
  return (
    <div className="py-3 border-t border-gray-100 sm:flex sm:items-center sm:justify-between mx-20">
      <nav aria-label="Footer Navigation - Support">
        <div className="flex flex-wrap justify-center gap-2 text-xs lg:justify-end">
          <Weather/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-clock"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
          <div className="font-thin">
            <TodayDate />
          </div>
        </div>
      </nav>
      <Sosmed />
    </div>
  );
};

export default Bar;
