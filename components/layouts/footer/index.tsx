import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import LogoIcon from "public/assets/logo.svg";
import OpenseaIcon from "public/assets/opensea.svg";
import RaribleIcon from "public/assets/rarible.svg";
import TwitterIcon from "public/assets/twitter.svg";
import DiscordIcon from "public/assets/discord.svg";
type FooterProps = {
  type?: string;
};

const Footer: FC<FooterProps> = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100">
      <div className="mx-auto container px-8 flex flex-row items-center justify-between pb-3 flex-wrap text-gray-600 2xl:gap-x-60 2xl:gap-y-20">
        <div className="py-4 flex-wrap lg:w-1/4">
          <button className="w-32 flex items-center" onClick={() => router.push("/")}>
            <Image src={LogoIcon} alt="logo" />
          </button>
          <p className="mt-4">The best solution for no-code web3 apps</p>
          <hr className="mt-4" />
          <div className="flex items-center gap-4 mt-4">
            <p className="2xl:text-lg">Join our Community</p>
            <Link href={"https://opensea.io/collection/nftlaunchkit"}>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={OpenseaIcon} alt="opensea" width={30} height={30} />
              </a>
            </Link>
            <Link href={"https://rarible.com/nftlaunchkit"}>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={RaribleIcon} alt="rarible" width={30} height={30} />
              </a>
            </Link>
            <Link href={"https://twitter.com/NFTLaunchKit"}>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={TwitterIcon} alt="twitter" width={30} height={30} />
              </a>
            </Link>
            <Link href={"https://discord.gg/AGuwr5j6d7"}>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={DiscordIcon} alt="discord" width={30} height={30} />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="p-4 pl-0 flex flex-col gap-5 lg:px-14">
            <p className="font-bold">Products</p>
            <Link href="/">
              <a>Pre-built Contracts</a>
            </Link>
            <Link href="/">
              <a>Mint Website Builder</a>
            </Link>
          </div>
          <div className="p-4 flex flex-col gap-5 2xl:ml-8 lg:px-14">
            <ul className="font-bold">Resources</ul>
            <Link href="/">
              <a>Documentation</a>
            </Link>
            <Link href="/">
              <a>Tutorials</a>
            </Link>
          </div>
          <div className="flex pl-0 flex-col p-4 2xl:py-4 gap-5 lg:pl-14 lg:pr-0">
            <p className="font-bold">Legal</p>
            <Link href="/">
              <a>Privacy Policy</a>
            </Link>
            <Link href="/">
              <a>Terms & Conditions</a>
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full h-12 flex justify-between items-center border-t border-gray-200 text-gray-600">
          <div className="text-sm font-light mt-2">© 2022 NFTLaunchKit.xyz | Made with ♥ in Berlin</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
