import type { Experience as ExperienceItem } from "@/types/profile";

type Props = {
	experiences: ExperienceItem[];
};

export default function Experience({ experiences }: Props) {
	return (
		<ul className="space-y-4">
			{experiences.map((experience) => (
				<li
					key={experience.title}
					className="rounded-xl border border-stone-200 p-5 dark:border-stone-800"
				>
					<p className="text-xs font-medium text-stone-500 dark:text-stone-400">
						{experience.category}
					</p>
					<h3 className="mt-1 text-lg font-semibold text-stone-900 dark:text-stone-50">
						{experience.title}
					</h3>
					<p className="mt-1 text-stone-600 dark:text-stone-300">
						{experience.summary}
					</p>
					<ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-stone-600 marker:text-stone-400 dark:text-stone-300 dark:marker:text-stone-600">
						{experience.details.map((detail) => (
							<li key={detail}>{detail}</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
}
