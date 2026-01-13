import React from "react";

const ThinkMentorLogo = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 17V4m0 13a4 4 0 107.967-.517M11 17a4 4 0 11-7.967-.517M11 4a3 3 0 115.598 1.5M11 4a3 3 0 10-5.598 1.5M14 12a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4m8.997-7.875a4 4 0 012.526 5.77M17 17a4 4 0 002-7.464M5 17a4 4 0 01-2-7.464m2.003-5.41a4 4 0 00-2.526 5.77"
        stroke="#C1A01B"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ThinkMentorLogo;
