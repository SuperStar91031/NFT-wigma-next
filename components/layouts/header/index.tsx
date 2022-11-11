import React, { useState, FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import LogoIcon from "public/assets/logo.svg";
import ConnectModal from "components/connectModal";

import { useAccount, useDisconnect } from "wagmi";

type HeaderProps = {
  type?: string;
};

const Header: FC<HeaderProps> = ({ type }) => {
  enum MENU_NUMBER {
    HOME,
    EXPLORE,
    PRICING,
    MEMBERSHIP,
    START_BUILDING,
  }

  let menuItems = [
    { id: MENU_NUMBER.HOME, title: "Home", link: "/" },
    { id: MENU_NUMBER.EXPLORE, title: "Explore", link: "/explore" },
    { id: MENU_NUMBER.PRICING, title: "Pricing", link: "/pricing" },
    { id: MENU_NUMBER.PRICING, title: "Membership", link: "/membership" },
    {
      id: MENU_NUMBER.START_BUILDING,
      title: "Start Building",
      link: "/dashboard",
    },
  ];

  const router = useRouter();
  const [openConnectModal, setOpenConnectModal] = useState<boolean>(false);

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="min-h-full bg-transparent shadow-sm">
      <div className="container mx-auto px-8 flex items-center h-20 text-gray-600">
        <div className="flex items-center justify-between w-full">
          {/* logo icon */}
          <button
            className="w-32 flex items-center justify-center"
            onClick={() => router.push("/")}
          >
            <Image src={LogoIcon} alt="logo" />
          </button>
          {/* menu items */}
          <div className="flex hidden lg:flex lg:items-center space-x-6 xl:space-x-12 z-50">
            {menuItems.map(({ id, title, link }, index: number) => {
              return (
                <Link href={link} key={index}>
                  <a className="font-medium">{title}</a>
                </Link>
              );
            })}

            {!isConnected && (
              <button
                className="big-btn nlk-gradient"
                onClick={() => setOpenConnectModal(true)}
              >
                Connect
              </button>
            )}

            {isConnected && (
              <>
                <p>{address}</p>
                <button
                  className="big-btn nlk-gradient"
                  onClick={() => disconnect()}
                >
                  Disconnect
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <ConnectModal
        onClose={() => {
          setOpenConnectModal(false);
        }}
        open={openConnectModal}
        modalTitle="Connect Wallet"
      />
    </div>
  );
};

export default Header;
