"use client";

import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import "@solana/wallet-adapter-react-ui/styles.css";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
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
        <Link href={'/'} className="w-[113.21px] h-[30px] relative">
          <Image
            src={"/imgs/sqr-logo.svg"}
            alt={""}
            width={113}
            height={30}
          ></Image>
        </Link>
      </div>
      <div className="justify-start items-start flex">
        <WalletMultiButton style={buttonStyle} />
      </div>
    </div>
  );
};

export default Navbar;
