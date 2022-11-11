import React from "react";
import PageLayout from "components/layouts/pageLayout";
import type { NextPage } from "next";
import { url } from "inspector";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className="w-full min-h-screen bg-cover">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between md:space-x-12 items-center py-16 md:pt-32 text-gray-800">
          <div className="flex flex-col w-full md:w-1/2 lg:w-2/5">
            <h1 className="font-bold text-center md:text-left text-6xl xl:text-8xl leading-tight">
              The best solution for no-code web3 apps.
            </h1>
            <div className="text-center md:text-left my-6 md:my-12 lg:text-xl font-light text-gray-600">
              With NFTLaunchKit you can create a smart contract in our dashboard with a few clicks, provided by
              Thirdweb. You can create a NFT Minting Website with our templates and manage everything from the
              dashboard. Without any code and for free.
            </div>
            <div className="flex flex-col mx-auto md:mx-0 md:justify-start md:flex-row md:space-x-6">
              <button className="big-btn nlk-gradient px-5 w-64 mb-4 md:w-auto">Start building</button>
            </div>
          </div>
          <div className="flex justify-center w-full mt-16 md:mt-0 md:w-1/2 transition ease-in-out hover:scale-105">
            <img src="/assets/banner.png" alt="banner" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
