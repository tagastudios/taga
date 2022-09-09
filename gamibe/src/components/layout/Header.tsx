import Button from "../UI/Button";
import Icons from "../UI/Icons";

type Props = {};

import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";

function Header(props: Props) {
	const [open, setOpen] = useState(false);
	const session = { user: null };

	const links = [
		{ href: "/expenses", label: "Expenses" },
		{ href: "/incomes", label: "Incomes" },
		{ href: "/tables", label: "Tables" },
	];

	return (
		<header
			className={`bg-slate-700 overflow-hidden ${
				open ? "min-h-screen min-w-full over absolute" : ""
			}`}
		>
			<nav className={`flex justify-between items-center  py-5 top-0 left-0`}>
				<ul className="sm:hidden sm:pl-4 flex">
					<Menu>
						{({ open: openState }) => {
							setOpen(openState);
							return (
								<>
									<Menu.Button className="pl-4">
										<Icons icon="menu" size={24} />
									</Menu.Button>
									<Transition
										className="absolute"
										show={open}
										enter="transition duration-500 ease-in-out"
										enterFrom="transform translate-x-16 opacity-0"
										enterTo="transform translate-x-0 opacity-100"
										leave="transition duration-500 ease-out"
										leaveFrom="transform translate-x-0 opacity-100"
										leaveTo="transform translate-x-16 opacity-0"
									>
										<Menu.Items className="absolute flex flex-col top-16 w-screen font-mono text-2xl gap-2">
											{links.map((link) => (
												<Link key={link.href} href={link.href}>
													<div className="bg-slate-800 shadow-lg shadow-slate-800 h-20 flex justify-center items-center hover:bg-emerald-600 transform duration-500 ease-in-out cursor-pointer">
														<Menu.Item>
															<div>{link.label}</div>
														</Menu.Item>
													</div>
												</Link>
											))}
										</Menu.Items>
									</Transition>
								</>
							);
						}}
					</Menu>
					<h1
						className="leading-normal font-extrabold bg-gradient-to-r from-blue-400 via-emerald-100
				to-emerald-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl ml-2"
					>
						<Link href="/">Gamibe </Link>
					</h1>
				</ul>

				<h1
					className="hidden-normal sm:flex sm:pl-4 leading-normal font-extrabold bg-gradient-to-r from-blue-400 via-emerald-100
				to-emerald-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl"
				>
					<Link href="/">Gamibe </Link>
				</h1>

				<ul className="gap-2 hidden-normal sm:flex sm:pr-4">
					<Button link="/expenses" title="Expenses" />
					<Button link="/incomes" title="Incomes" />
					<Button link="/tables" title="Tables" />
					<Button link="/login" icon="login" title="Login" />
				</ul>

				<div className="sm:hidden pr-4">
					{session.user && <Button link="/logout" title="Logout" icon="" />}
					{!session.user && <Button link="/login" title="Login" icon="login" />}
				</div>
			</nav>
		</header>
	);
}

export default Header;
