"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import bs58 from "bs58";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { notification } from "antd";
import { Button } from "./ui/button";
import Router from "next/router";
import { deleteCookie } from "cookies-next";

const ConnectWallet = () => {
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
  const { publicKey, signMessage, connected, disconnect } = useWallet();
  const { data: session } = useSession();
  const handleSignIn = async () => {
    if (!publicKey || !signMessage) {
      return;
    }

    try {
      const message = `Authenticate login at ${new Date().toISOString()}`;
      const encodedMessage = new TextEncoder().encode(message);
      const signature = await signMessage(encodedMessage);

      const base64Signature = btoa(String.fromCharCode(...new Uint8Array(signature)));

      const result = await signIn("credentials", {
        redirect: false,
        publicKey: publicKey.toString(),
        signature: base64Signature,
        message,
      });

      if (result?.error) {
        notification.error({
          message: "Authentication error",
          description: result.error,
        });
      } else {
        notification.success({
          message: "Login successful!",
          description: result.error,
        });
        window.location.href = "/agents";
        Router.push("/agents");
      }
    } catch (error) {
      console.error("Error signing message:", error);
    }
  };

  const handleLogout = () => {
    // signOut({
    //   callbackUrl: "/",
    // });
    disconnect();
    signOut();
    localStorage.clear();
    deleteCookie("userTwitter");
  };

  return (
    <div className="flex flex-row gap-4">
      {!connected && <WalletMultiButton style={buttonStyle} />}

      {connected && !session && <Button onClick={handleSignIn}>SIGN IN WITH WALLET</Button>}
      {connected && session && (
        <>
          <div className="h-[42px] px-3.5 py-2 border border-[#dcff9f] justify-center items-center inline-flex overflow-hidden">
            <div className="px-1 justify-center items-center gap-2.5 flex">
              <div className="text-center text-white text-lg font-semibold font-['Chakra Petch'] leading-relaxed">
                {`${publicKey?.toString()?.substring(0, 6)} ..${publicKey?.toString()?.substring(publicKey?.toString().length - 6, publicKey?.toString().length)}`}
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.83317 6.6665H4.1665V8.33317H5.83317V9.99984H7.49984V11.6665H9.1665V13.3332H10.8332V11.6665H12.4998V9.99984H14.1665V8.33317H15.8332V6.6665H14.1665V8.33317H12.4998V9.99984H10.8332V11.6665H9.1665V9.99984H7.49984V8.33317H5.83317V6.6665Z"
                fill="white"
              />
            </svg>
          </div>
          <Button
            onClick={() => {
              handleLogout();
            }}
          >
            LogOut
          </Button>
        </>
      )}
    </div>
  );
};

export default ConnectWallet;
