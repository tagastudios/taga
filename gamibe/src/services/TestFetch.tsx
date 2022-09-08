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

export default TestFetch;
