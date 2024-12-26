import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Solana Wallet",
            credentials: {
                publicKey: { label: "Public Key", type: "text" },
                signature: { label: "Signature", type: "text" },
                message: { label: "Message", type: "text" },
            },
            async authorize(credentials) {
                const { publicKey, signature, message } = credentials;

                try {
                    const publicKeyObj = new PublicKey(publicKey);
                    const messageUint8 = new TextEncoder().encode(message);
                    const signatureUint8 = Uint8Array.from(
                        atob(signature).split("").map((char) => char.charCodeAt(0))
                    );

                    const isValid = nacl.sign.detached.verify(
                        messageUint8,
                        signatureUint8,
                        publicKeyObj.toBytes()
                    );

                    if (isValid) {
                        return { id: publicKey, name: publicKey };
                    }

                    return null;
                } catch (error) {
                    console.error("Lỗi xác thực:", error);
                    return null;
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt", // Hoặc "database" nếu dùng cơ sở dữ liệu
    },
    callbacks: {
        async session({ session, token }) {
            session.user = token.user; // Thêm thông tin user vào session
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
};

// Cấu hình các phương thức HTTP
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
