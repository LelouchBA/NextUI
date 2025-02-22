// @ts-nocheck
import "@/styles/globals.css";
import "@/styles/menu.css";
import "@/styles/bell.scss";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Starfield from 'react-starfield';
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";
import Banner from "@/components/banner"
import {Button, ButtonGroup} from "@nextui-org/react";
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
				<Navbar />
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					
					<div className="relative flex flex-col h-screen">
						<main className="container mx-auto max-w-7xl pt-20 px-6 flex-grow">
							<Starfield
								starCount={6000}
								starColor={[255, 255, 255]}
								speedFactor={0.01}
								backgroundColor="black"
							/>
							{children}
						</main>
						<div className="text-white py-4 fixed bottom-0 w-full">
							<div className="p-3 container mx-auto flex justify-center items-center gap-2">
								{/* <Counter /> */}
								<ButtonGroup>
							
								<Button startContent={<CameraIcon />}>
									Friends
								</Button>
								<Button startContent={<HeartIcon />}>
									Boost
								</Button>
								<Button startContent={<HeartIcon />}>
									Task
								</Button>
								<Button startContent={<HeartIcon />}>
									Pad
								</Button>
								</ButtonGroup>
							</div>
							<div className="p-1 mt-2">
							<ProgressCounter />
							</div>
							
						</div>
						
					</div>
				</Providers>
			</body>
		</html>
	);
}
