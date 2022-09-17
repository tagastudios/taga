import NextAuth, { type NextAuthOptions } from "next-auth";
// import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
	// Include entire user from database on session
	callbacks: {
		session: ({ session, user }) => {
			console.log(user);
			if (session.user) {
				session.user = { ...session.user, ...user };
			}
			return session;
		},
	},
	// Configure one or more authentication providers
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
			profile(profile) {
				return {
					id: profile.email,
					firstName: profile.given_name,
					lastName: profile.family_name,
					email: profile.email,
					emailVerified: profile.email_verified,
					image: profile.picture,
				};
			},
		}),
	],
	secret: env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
