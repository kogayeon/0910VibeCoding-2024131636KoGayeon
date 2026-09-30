type Props = {
	name: string;
	affiliation: string;
	headline: string;
	bio: string[];
};

export default function Intro({ name, affiliation, headline, bio }: Props) {
	return (
		<header className="mt-10 sm:mt-14">
			<h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
				{name}
			</h1>
			<p className="mt-2 text-stone-500 dark:text-stone-400">
				{affiliation}
			</p>
			<p className="mt-6 text-lg font-medium text-stone-900 sm:text-xl dark:text-stone-100">
				{headline}
			</p>
			<div className="mt-4 space-y-3 leading-7 text-stone-600 dark:text-stone-300">
				{bio.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>
		</header>
	);
}
