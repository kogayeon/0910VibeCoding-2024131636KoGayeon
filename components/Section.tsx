type Props = {
	number: number;
	title: string;
	children: React.ReactNode;
};

export default function Section({ number, title, children }: Props) {
	return (
		<section className="mt-20 border-t-2 border-current pt-5 sm:mt-28">
			<div className="flex items-baseline gap-4 sm:gap-6">
				<span className="font-display text-sm tabular-nums en:italic">
					No. {String(number).padStart(2, "0")}
				</span>
				<h2 className="font-display text-4xl leading-none font-bold sm:text-6xl en:font-normal en:italic">
					{title}
				</h2>
			</div>
			<div className="mt-10">{children}</div>
		</section>
	);
}
