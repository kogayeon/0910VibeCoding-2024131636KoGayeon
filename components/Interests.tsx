import type { LocalizedContent } from "@/types/profile";

type Props = {
	interests: LocalizedContent["interests"];
	learningTitle: string;
};

export default function Interests({ interests, learningTitle }: Props) {
	return (
		<div className="space-y-10">
			<ul className="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-display text-4xl leading-tight sm:text-6xl">
				{interests.fields.map((field, index) => (
					<li key={field} className="flex items-baseline gap-4">
						{index > 0 && (
							<span
								aria-hidden="true"
								className="font-normal text-neutral-400"
							>
								/
							</span>
						)}
						<span className="en:italic">{field}</span>
					</li>
				))}
			</ul>
			<div className="flex flex-col gap-3 border-t border-neutral-300 pt-4 sm:flex-row sm:gap-8 dark:border-neutral-700">
				<h3 className="shrink-0 text-[11px] tracking-[0.3em] uppercase">
					{learningTitle}
				</h3>
				<ul className="flex flex-wrap gap-x-3 text-sm text-neutral-700 dark:text-neutral-300">
					{interests.learning.map((item, index) => (
						<li key={item}>
							{index > 0 && (
								<span
									aria-hidden="true"
									className="mr-3 text-neutral-400"
								>
									·
								</span>
							)}
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
