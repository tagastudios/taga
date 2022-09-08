import { useState } from "react";

import Icons from "../UI/Icons";

const DEFAULT_VALUES = {
	primary: "rgb(20, 184, 166)",
	secondary: "white",
};

type Props = {
	title: string;
	icon?: string;
	primary?: string;
	secondary?: string;
};

const Button = ({ title, icon, primary, secondary }: Props) => {
	const [hover, setHover] = useState(false);

	return (
		<button
			className="transition-all ease-out duration-300  hover:bg-emerald-500 hover:border-solid hover:rounded-3xl hover:font-bold p-2 w-24 border-teal-500 border-dashed border rounded-xl shadow-lg shadow-gray-800 hover:shadow-teal-500/50 active:bg-emerald-600"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className="flex justify-center items-center">
				<Icons
					icon={icon}
					size={20}
					color={
						hover
							? secondary || DEFAULT_VALUES.secondary
							: primary || DEFAULT_VALUES.primary
					}
					strokeWidth={hover ? 2.5 : 1.5}
				/>
				<div
					style={{
						color: hover
							? secondary || DEFAULT_VALUES.secondary
							: primary || DEFAULT_VALUES.primary,
					}}
				>
					{title}
				</div>
			</div>
		</button>
	);
};

export default Button;
