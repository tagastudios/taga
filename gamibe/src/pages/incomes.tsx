import { trpc } from "../utils/trpc";

type Props = {};

const Incomes = (props: Props) => {
	const { data: session, isLoading } = trpc.useQuery(["auth.getSession"]);

	const { data: incomes } = trpc.useQuery([
		"incomes.getAllIncomes",
		{
			uid: session?.user?.id,
		},
	]);

	const createIncomeMutation = trpc.useMutation("incomes.createIncome");

	const test = async (uid: string) => {
		const x = await createIncomeMutation.mutateAsync({
			title: "test",
			description: "test",
			amount: 0,
			startedAt: new Date(),
			uid,
			category: 1,
			paymentType: 1,
			recurringType: 1,
		});
		await console.log(x);
	};

	if (isLoading) return <div>Loading session...</div>;

	return (
		<div>
			<h1>Incomes for {session?.user?.id}</h1>
			{session?.user?.id ? (
				<button
					onClick={() => test(session?.user?.id)}
					className="bg-emerald-500 hover:bg-emerald-600 p-2"
				>
					New Income
				</button>
			) : (
				<p>Hola</p>
			)}
			<hr className="border-emerald-500" />
			<table className="max-w-xl">
				<thead>
					<tr>
						<th>Created At</th>
						<th>ID</th>
						<th>Amount</th>
						<th>Title</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{!incomes
						? ""
						: incomes.map((income) => {
								return (
									<tr>
										<td>{income.createdAt.toDateString()}</td>
										<td>{income.id}</td>
										<td>{income.amount}</td>
										<td>{income.title}</td>
										<td>{income.description}</td>
									</tr>
								);
						  })}
				</tbody>
			</table>
		</div>
	);
};

export default Incomes;
