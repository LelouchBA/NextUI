import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Starfield from 'react-starfield';
import Banner from "@/components/banner"
import {Button} from "@nextui-org/react";
import {HeartIcon} from './HeartIcon';
import {CameraIcon} from './CameraIcon';
import {Progress} from "@nextui-org/react";
import { Counter, ProgressCounter } from "@/components/counter";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<Starfield
						starCount={6000}
						starColor={[255, 255, 255]}
						speedFactor={0.01}
						backgroundColor="black"
					/>
					<div className="relative flex flex-col h-screen">
						{/* <Banner /> */}
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<div class="text-white py-4 fixed bottom-0 w-full mt-5 mb-3">
							<div class="container mx-auto flex justify-center items-center gap-2">
								<Counter class=""fixed/>
							
								<Button startContent={<CameraIcon />}>
									Friends
								</Button>
								<Button startContent={<HeartIcon />}>
									Boost
								</Button>
								<Button startContent={<HeartIcon />}>
									Task
								</Button>
							</div>
							<div className="mt-5">
							<ProgressCounter />
							</div>
							
						</div>
						
					</div>
				</Providers>
			</body>
		</html>
	);
}
