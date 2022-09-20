import { DefaultSession } from "next-auth";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		firstName: string;
		lastName: string;
		user?: {
			id: string;
			firstName: string;
			lastName: string;
		} & DefaultSession["user"];
	}
}
