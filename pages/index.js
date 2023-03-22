import React from "react";

const Home = () => {
  return (
    <div>
      <div className="bg-neutral-300 h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl text-violet-800 font-bold mb-8">
          Site Under Construction
        </h1>
        <p className="text-lg mb-2 text-black flex flex-col justify-center items-center text-center font-semibold">
          We are working hard to bring you something awsome. Please check back
        </p>
        <p className="text-lg text-black py-2">
          Please call or Send us an email if you have any questions.
        </p>
        <div className="flex flex-col gap-1 text-purple-800 font-bold">
          <span>+234 703 888 5466</span>
          <span className="font-semibold">customercare@loctechng.com</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
