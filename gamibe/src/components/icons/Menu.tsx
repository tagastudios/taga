type Props = {
	size: number;
	fillColor: string;
	strokeColor: string;
	strokeWidth: number;
};

const Login = ({ size, fillColor, strokeColor, strokeWidth }: Props) => {
	return (
		<svg
			style={{
				width: size + "px",
				height: size + "px",
			}}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill={fillColor}
			strokeWidth={strokeWidth}
			stroke={strokeColor}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			/>
		</svg>
	);
};

export default Login;
