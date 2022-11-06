import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { NextPage } from "next";
import { analytics } from "@utils/firebase";
import { Router } from "next/router";
import Head from "next/head";
import LinearProgress from "@mui/material/LinearProgress";

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const [isLoading, setIsLoading] = useState(false);
	Router.events.on("routeChangeStart", (url) => {
		// console.log("routeChangeStart...");
		setIsLoading(true);
	});
	Router.events.on("routeChangeComplete", (url) => {
		// console.log("routeChangeComplete");
		setIsLoading(false);
	});

	useEffect(() => {
		if (process.env.NODE_ENV === "production") {
			if (typeof window !== "undefined") {
				analytics();
			}
		}
	});
	const getLayout = Component.getLayout ?? ((page: any) => page);
	return getLayout(
		<>
			<Head>
				<title>Flashback</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			{isLoading && (
				<>
					<LinearProgress />
				</>
			)}
			<Component {...pageProps} />
		</>,
	);
}

export default MyApp;
