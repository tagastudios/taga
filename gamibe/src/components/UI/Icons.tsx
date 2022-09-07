import Login from "../icons/Login";

const DEFAULT_VALUES = {
	size: 50,
	color: "currentColor",
	fill: "none",
	strokeWidth: 1.5,
};

type Props = {
	icon: "login";
	size: number;
	color?: string;
	fill?: string;
	strokeWidth?: number;
};

const Icons = ({ icon, size, color, fill, strokeWidth }: Props) => {
	if (icon === "login")
		return (
			<div className={icon ? "pr-2" : ""}>
				<Login
					size={size || DEFAULT_VALUES.size}
					fillColor={fill || DEFAULT_VALUES.fill}
					strokeColor={color || DEFAULT_VALUES.color}
					strokeWidth={strokeWidth || DEFAULT_VALUES.strokeWidth}
				/>
			</div>
		);

	if (icon === "dashboard")
		return (
			<div>
				<p>Dashboard</p>
			</div>
		);

	return (
		<div>
			<p>Pass Icon Prop</p>
		</div>
	);
};

export default Icons;
