type Props = {};

const Login = (props: Props) => {
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
		</div>
	);
};

export default Login;
