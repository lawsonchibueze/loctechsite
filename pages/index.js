import React from "react";

const Home = () => {
  return (
    <div>
      <div className="bg-neutral-300 h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl text-black font-bold mb-8">
          Site Under Construction
        </h1>
        <p className="text-lg mb-2 text-black flex flex-col justify-center items-center text-center">
          We're working hard to bring you something awesome. Stay tuned!
        </p>

        <p className="text-lg text-black py-2">
          Please Call or Send us a Mail:
        </p>

        <div className="flex flex-col gap-1">
          <span className="text-violet-700 font-bold text-lg pt-5">
            +2347038885466
          </span>
          <div className="font-semibold">customercare@loctechng.com</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
