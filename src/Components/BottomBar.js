import React from "react";

const BottomBar = () => {
  return (
    <div className="container flex flex-col justify-center items-center w-screen py-4 bg-gray-700 text-white h-1/5 mx-auto static bottom-0">
      <div className="text-base md:text-lg py-2">
        <h1 className="text-green-400">Made by Mohan Nagabhiru</h1>
      </div>
      <div className="text-base md:text-lg py-1 font-semibold text-red-500">
        <a className="mr-16" href="https://github.com/mohanchowdarynr">
          Github
        </a>
        <a
          className="mr-16"
          href="https://www.linkedin.com/in/nagabhiru-mohan-govind-a157b1148/"
        >
          Linkedin
        </a>
        <a className="" href="https://twitter.com/mohannagabhiru">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default BottomBar;
