import { signIn, signOut, useSession } from "next-auth/react";

type Props = {
	firstName: string;
	lastName: string;
};

const Login = (props: Props) => {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <main>Loading...</main>;
	}

	return (
		<div className="flex flex-col justify-center align gap-4">
			<h2>Please Login</h2>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="What's your email?"
			/>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="Please enter your password"
			/>
			<button>Login Now..</button>

			{session ? (
				<>
					<p>hi {session.user?.firstName + " " + session.user?.lastName}</p>
					<button onClick={() => signOut()} className="bg-emerald-700">
						Sign Out
					</button>
				</>
			) : (
				<button onClick={() => signIn()} className="bg-emerald-700">
					Sign In
				</button>
			)}
		</div>
	);
};

export default Login;
