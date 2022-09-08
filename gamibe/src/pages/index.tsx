import type { NextPage } from "next";
import Head from "next/head";

import TestFetch from "../services/TestFetch";

const Home: NextPage = () => {
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

			<TestFetch />
		</>
	);
};

export default Home;
