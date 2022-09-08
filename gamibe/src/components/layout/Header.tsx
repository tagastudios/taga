import Button from "../UI/Button";

type Props = {};

const Header = (props: Props) => {
	return (
		<header>
			<nav className="flex justify-between items-center px-4 bg-slate-700 overflow-hidden py-5 top-0 left-0">
				<h1
					className="leading-normal font-extrabold bg-gradient-to-r from-blue-400 via-emerald-100
				to-emerald-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl"
				>
					Gamibe
				</h1>

				<div className="flex gap-2">
					<Button title="Expenses" />
					<Button title="Incomes" />
					<Button title="Tables" />
					<Button icon="login" title="Login" />
				</div>
			</nav>
		</header>
	);
};

export default Header;
