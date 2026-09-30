import type { LocalizedContent } from "@/types/profile";

type Props = {
	interests: LocalizedContent["interests"];
	learningTitle: string;
};

export default function Interests({ interests, learningTitle }: Props) {
	return (
		<div className="space-y-6">
			<ul className="flex flex-wrap gap-2">
				{interests.fields.map((field) => (
					<li
						key={field}
						className="rounded-full bg-teal-50 px-3.5 py-1.5 text-sm font-medium text-teal-800 dark:bg-teal-950 dark:text-teal-200"
					>
						{field}
					</li>
				))}
			</ul>
			<div>
				<h3 className="text-sm text-stone-500 dark:text-stone-400">
					{learningTitle}
				</h3>
				<ul className="mt-2 flex flex-wrap gap-2">
					{interests.learning.map((item) => (
						<li
							key={item}
							className="rounded-full border border-stone-200 px-3 py-1 text-sm text-stone-700 dark:border-stone-800 dark:text-stone-300"
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
