import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
	const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

	return (
		<>
			<Head>
				<title>Gamibe - Finance Made Easy</title>
				<meta
					name="Gamibe - Finance Made Easy"
					content="Take control of your personal finance"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
				<h1
					className="text-5xl md:text-[5rem] leading-normal font-extrabold bg-gradient-to-r from-blue-400 via-emerald-100
				to-emerald-600 bg-clip-text text-transparent"
				>
					Gamibe
				</h1>
				<div className="pt-6 text-2xl">
					<h2>Example Test:</h2>
					<hr className="border-emerald-500" />
					{hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
				</div>

				<div className="py-10 text-xl">
					<h2>Users No Auth Test:</h2>
					<hr className="border-emerald-500" />
					<Users />
				</div>

				<div className="pt-5">
					<button
						className="transition-all ease-out duration-300  hover:bg-emerald-500 hover:border-solid hover:rounded-3xl hover:font-bold p-2 w-52 border-teal-500 border-dashed border-2 rounded-lg shadow-lg
					hover:shadow-teal-600/50 active:bg-emerald-600"
					>
						Login
					</button>
				</div>
			</main>
		</>
	);
};

const Users = () => {
	const { data: users, isLoading } = trpc.useQuery(["user.getAll"]);

	if (isLoading) return <div>Fetching messages...</div>;

	return (
		<div className="flex flex-col gap-4">
			{users?.map((user, index) => {
				return (
					<div key={index}>
						<p>
							User {index + 1}: {user.firstName} {user.lastName}
						</p>
						<span>Email: {user.email}</span>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
