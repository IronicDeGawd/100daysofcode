// import React from "react";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-3/4">
        <div className="absolute z-10 left-1/2 -translate-x-1/2">
          <p
            className="relative text-maincontent text-gray-700"
            style={{ fontFamily: "Tektur" }}
          >
            ShoeMania
          </p>
          <p
            className="relative text-8xl leading-3 text-gray-500 font-serif"
            style={{ fontFamily: "Gloria" }}
            content="Find your glory shoes wink"
          >
            Find your glory shoes
          </p>
        </div>
        <div className="absolute z-20 w-4/12 right-44 top-48 rotate-45 hover:rotate-12 hover:w-5/12 transition-all delay-300 ease-linear overflow-hidden">
          <img src="/nike-shoes.webp"></img>
        </div>
      </div>
    </>
  );
}
