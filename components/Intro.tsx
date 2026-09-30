type Props = {
	name: string;
	affiliation: string;
	headline: string;
	bio: string[];
};

export default function Intro({ name, affiliation, headline, bio }: Props) {
	const [lead, ...rest] = bio;

	return (
		<header className="grid gap-10 border-t border-current pt-8 md:grid-cols-12 md:gap-8">
			<div className="md:col-span-5">
				<p className="text-[11px] tracking-[0.3em] uppercase">
					{affiliation}
				</p>
				<h1 className="mt-4 font-display text-6xl leading-[0.95] font-bold sm:text-7xl en:font-medium">
					{name}
				</h1>
			</div>
			<div className="md:col-span-7">
				<blockquote className="font-display text-2xl leading-snug sm:text-3xl en:italic">
					<span aria-hidden="true">“</span>
					{headline}
					<span aria-hidden="true">”</span>
				</blockquote>
				<div className="mt-8 space-y-4 leading-7 text-neutral-700 dark:text-neutral-300">
					<p className="first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:font-bold first-letter:text-black dark:first-letter:text-white">
						{lead}
					</p>
					{rest.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>
			</div>
		</header>
	);
}
