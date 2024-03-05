import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { BodyCounter } from "@/components/counter";
import {Button} from "@nextui-org/react";
import Starfield from 'react-starfield';

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-5">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Start mine&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Univer&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "mt-4" })}>
					Join Beautiful, fast and modern blockchain.
				</h2>
			</div>


			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						<Code className="mb-5" color="success">currenly all worker is online</Code>
						<BodyCounter />
						<div className="flex justify-center mt-5 mb-5">
							<Button color="success" variant="ghost" isLoading="false">
								MINER ON!
							</Button> 
						</div>
						
					</span>
				</Snippet>
			</div>
		</section>
	);
}
