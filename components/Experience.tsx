import type { Experience as ExperienceItem } from "@/types/profile";

type Props = {
	experiences: ExperienceItem[];
};

export default function Experience({ experiences }: Props) {
	return (
		<div className="space-y-16">
			{experiences.map((experience, index) => (
				<article
					key={experience.title}
					className="grid gap-6 md:grid-cols-12 md:gap-8"
				>
					<div className="md:col-span-4">
						<p className="text-[11px] tracking-[0.3em] uppercase">
							{experience.category}
						</p>
						<p
							aria-hidden="true"
							className="mt-2 font-display text-7xl leading-none text-neutral-300 tabular-nums dark:text-neutral-700"
						>
							{String(index + 1).padStart(2, "0")}
						</p>
					</div>
					<div className="md:col-span-8">
						<h3 className="font-display text-3xl leading-tight font-bold sm:text-4xl en:font-medium">
							{experience.title}
						</h3>
						<p className="mt-3 font-display text-lg text-neutral-600 sm:text-xl dark:text-neutral-400 en:italic">
							{experience.summary}
						</p>
						<ul className="mt-6 border-t border-neutral-300 dark:border-neutral-700">
							{experience.details.map((detail) => (
								<li
									key={detail}
									className="border-b border-neutral-300 py-3 text-sm leading-6 text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
								>
									{detail}
								</li>
							))}
						</ul>
					</div>
				</article>
			))}
		</div>
	);
}
