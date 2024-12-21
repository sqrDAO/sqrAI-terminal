"use client";

import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
// require("@solana/wallet-adapter-react-ui/styles.css");

const Navbar: React.FC = () => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [new UnsafeBurnerWalletAdapter()],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );
  const buttonStyle = {
    background: "#a4fb0e",
    color: "#000000",
    padding: "4px 20px",
    borderRadius: "0px",
    border: "0px solid transparent",
    fontFamily: "var(--font-chakra)",
    fontSize: "18px",
    height: "42px",
  };
  return (
    <div className="w-full px-6 py-4 justify-between items-center inline-flex">
      <div className="w-[113.22px] h-[30px] justify-center items-center flex">
        <div className="w-[113.21px] h-[30px] relative">
          <div className="w-[22.87px] h-[12.49px] left-[90.34px] top-[17.20px] absolute"></div>
        </div>
      </div>
      <div className="justify-start items-start flex">
        {/* <div className="px-3.5 py-2 bg-[#a4fb0e] justify-center items-center flex overflow-hidden">
          <div className="px-1 justify-center items-center gap-2.5 flex">
            <div className="text-center text-black text-lg font-semibold font-['Chakra Petch'] leading-relaxed">
              Connect wallet
            </div>
          </div>
        </div> */}
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <WalletMultiButton style={buttonStyle} />
              {/* <WalletDisconnectButton /> */}
              {/* Your app's components go here, nested within the context providers. */}
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </div>
  );
};

export default Navbar;
