import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { title, subtitle } from "@/components/primitives";
import { BodyCounter } from "@/components/counter";
import {Button} from "@nextui-org/react";
import Bellicon from "./BellIcon"

export default function Home() {
	
	return (
		<section className="flex flex-col items-center justify-center">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Start mine&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Univermine&nbsp;</h1>
				<br />
				<div className="mt-4">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						<Code className="mb-5" color="success">currenly all worker is online</Code>
						<BodyCounter />
						<div className="flex justify-center mt-5 mb-5">
							<Button color="success" variant="ghost">
								MINER ON!
							</Button> 
							
						</div>
						
					</span>
				</Snippet>
			</div>
				<h2 className={subtitle({ class: "mt-4" })}>
					Join Beautiful, fast and modern blockchain.
				</h2>
			</div>
		</section>
	);
}
