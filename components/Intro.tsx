type Props = {
	name: string;
	affiliation: string;
	tags: string[];
	headline: string;
	bio: string[];
};

const TAG_COLORS = ["bg-lavender", "bg-mint"];

export default function Intro({
	name,
	affiliation,
	tags,
	headline,
	bio,
}: Props) {
	const [lead, ...rest] = bio;

	return (
		<header className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-12 gap-y-8 border-b border-rule pt-7 pb-12">
			<div className="flex flex-col gap-3.5">
				<p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
					{affiliation}
				</p>
				<h1 className="font-display text-[clamp(40px,6vw,72px)] leading-[1.12] font-bold tracking-[-0.02em]">
					{name}
				</h1>
				<ul className="mt-1 flex flex-wrap gap-2">
					{tags.map((tag, index) => (
						<li
							key={tag}
							className={`${TAG_COLORS[index % TAG_COLORS.length]} rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-[0.06em]`}
						>
							{tag}
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-col gap-[22px]">
				<blockquote className="border-l-4 border-peach-accent pl-[18px] font-display text-[clamp(22px,2.6vw,30px)] leading-[1.45] font-medium tracking-[-0.01em]">
					<span aria-hidden="true">“</span>
					{headline}
					<span aria-hidden="true">”</span>
				</blockquote>
				<div className="flex max-w-[56ch] flex-col gap-3.5 text-[16.5px] text-body">
					<p className="first-letter:float-left first-letter:mt-1 first-letter:mr-2.5 first-letter:font-display first-letter:text-[52px] first-letter:leading-[0.86] first-letter:font-bold first-letter:text-plum">
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
