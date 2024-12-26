// import NextAuth from 'next-auth';
// import { Session as NextAuthSession } from 'next-auth';

// interface Session extends NextAuthSession {
//   user: {
//     name?: string;
//     email?: string;
//     image?: string;
//     publicKey?: string;
//   };
// }
// import CredentialsProvider from "next-auth/providers/credentials";
// import { verifySignature } from '@solana/web3.js';

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: 'Solana',
//       credentials: {
//         publicKey: { label: 'Public Key', type: 'text' },
//         signature: { label: 'Signature', type: 'text' },
//         message: { label: 'Message', type: 'text' },
//       },
//       authorize: async (credentials) => {
//         const { publicKey, signature, message } = credentials;

//         try {
//           const isValid = verifySignature(publicKey, signature, message);
//           if (isValid) {
//             return { id: publicKey, name: publicKey };
//           } else {
//             return null;
//           }
//         } catch (error) {
//           console.error('Error verifying signature:', error);
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.publicKey = user.name; // Assuming publicKey is stored in user.name
//       }
//       return token;
//     },
//     async session({ session, token, user, newSession, trigger }: { session: Session, token: any, user: any, newSession: any, trigger: "update" }) {
//       session.user.publicKey = token.publicKey;
//       return session;
//     },
//   },
// });