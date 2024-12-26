"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import bs58 from "bs58";
import { useEffect } from "react";
import { signIn } from "next-auth/react";

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
  const { publicKey, signMessage, connected } = useWallet();

  const handleSignIn = async () => {
    if (!publicKey || !signMessage) {
      alert("Vui lòng kết nối ví!");
      return;
    }

    try {
      const message = `Xác thực đăng nhập vào ${new Date().toISOString()}`;
      const encodedMessage = new TextEncoder().encode(message);
      const signature = await signMessage(encodedMessage);

      const base64Signature = btoa(
        String.fromCharCode(...new Uint8Array(signature))
      );

      const result = await signIn("credentials", {
        redirect: false,
        publicKey: publicKey.toString(),
        signature: base64Signature,
        message,
      });

      if (result?.error) {
        alert(`Lỗi xác thực: ${result.error}`);
      } else {
        alert("Đăng nhập thành công!");
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Lỗi khi ký tin nhắn:", error);
    }
  };
  return (
    <>
      <WalletMultiButton style={buttonStyle} />
      {connected && (
        <button
          onClick={handleSignIn}
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Đăng nhập
        </button>
      )}
    </>
  );
};

export default ConnectWallet;
