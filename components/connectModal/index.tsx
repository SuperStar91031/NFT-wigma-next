import React, { FC } from "react";
import Image from "next/image";
import BaseModal, { BaseModalProps } from "components/baseModal";
import metaMaskIcon from "public/assets/metamask.svg";
import walletConnectIcon from "public/assets/wallet_connect.svg";
import coinbaseWalletIcon from "public/assets/coinbase.svg";

import { useConnect } from "wagmi";

type ConnectModalProps = {
  modalTitle: string;
  modalType?: string;
} & BaseModalProps;

const ConnectModal: FC<ConnectModalProps> = ({ open, onClose, modalTitle }) => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const Icons = {
    metaMaskIcon,
    walletConnectIcon,
    coinbaseWalletIcon,
  };

  return (
    <BaseModal open={open} onClose={onClose} title={modalTitle}>
      <p className="text-sm text-gray-500 w-80">
        Connect with one of our available wallet providers or create a new one.
      </p>
      <div className=" py-2">
        {connectors.map((connector: any, index: number) => (
          <div
            className={
              connector.id == "metaMask" ? "mt-4" + " relative" : "mt-4"
            }
            key={index}
          >
            <button
              disabled={!connector.ready}
              className="w-full big-btn bg-gray-100 gap-2 !justify-start"
              onClick={() => connect({ connector })}
            >
              <Image
                src={Icons[connector.id + "Icon"]}
                alt={connector.id}
                width={24}
                height={24}
              />
              {connector.name}
              {!connector.ready && " (unsupported)"}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                " (connecting)"}
            </button>
            {connector.id == "metaMask" && (
              <span className="absolute text-xs font-medium text-gray-500 bg-gray-200 rounded-3xl px-3 py-1 top-3 right-4">
                Popular
              </span>
            )}
          </div>
        ))}

        {error && <div>{error.message}</div>}
      </div>
    </BaseModal>
  );
};

export default ConnectModal;
