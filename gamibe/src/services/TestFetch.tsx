import { trpc } from "../utils/trpc";

type Props = {};

const TestFetch = (props: Props) => {
	const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

	return (
		<div>
			<div className="text-2xl">
				<h2>Example Test:</h2>
				<hr className="border-emerald-500" />
				{hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
			</div>

			<div className="py-10 text-xl">
				<h2>Users No Auth Test:</h2>
				<hr className="border-emerald-500" />
				<Users />
			</div>

			<div className="py-5 text-xl max-w-lg overflow-auto">
				<h2>Sessions:</h2>
				<hr className="border-emerald-500" />
				<Protected />
			</div>
		</div>
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

const Protected = () => {
	const {
		data: session,
		isLoading,
		isError,
	} = trpc.useQuery(["auth.getSession"]);

	if (isLoading) return <div>Loading session...</div>;

	if (isError)
		return (
			<div>Sorry, couldn't load data. Error: {JSON.stringify(session)}</div>
		);

	return (
		<div>
			<h1> Protected Route</h1>
			<hr className="border-emerald-500" />
			<div>{JSON.stringify(session)}</div>
		</div>
	);
};

export default TestFetch;
