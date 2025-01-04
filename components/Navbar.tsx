"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ConnectWallet from "./ConnectWallet";

const Navbar: React.FC = () => {
  return (
    <div className="w-full px-6 py-4 justify-between items-center inline-flex">
      <div className="w-[113.22px] h-[30px] justify-center items-center flex">
        <Link href={"/"} className="w-[113.21px] h-[30px] relative">
          <Image
            src={"/imgs/sqr-logo.svg"}
            alt={""}
            width={113}
            height={30}
          ></Image>
        </Link>
      </div>
      <div className="justify-start items-start flex">
        <ConnectWallet></ConnectWallet>
      </div>
    </div>
  );
};

export default Navbar;
