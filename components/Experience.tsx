import type { Experience as ExperienceItem } from "@/types/profile";

type Props = {
	experiences: ExperienceItem[];
};

export default function Experience({ experiences }: Props) {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
			{experiences.map((experience, index) => (
				<article
					key={experience.title}
					className="flex flex-col gap-3 rounded-[20px] bg-mint-soft px-6 py-[26px]"
				>
					<div className="flex items-center justify-between gap-3">
						<p className="rounded-full bg-white px-3 py-[5px] text-[11px] font-bold tracking-[0.14em] text-mint-ink uppercase">
							{experience.category}
						</p>
						<p
							aria-hidden="true"
							className="font-latin text-[40px] leading-none font-bold text-mint-num tabular-nums"
						>
							{String(index + 1).padStart(2, "0")}
						</p>
					</div>
					<h3 className="font-display text-[clamp(20px,2.2vw,26px)] font-bold tracking-[-0.01em]">
						{experience.title}
					</h3>
					<p className="text-base text-mint-body">
						{experience.summary}
					</p>
					<ul className="mt-1.5">
						{experience.details.map((detail) => (
							<li
								key={detail}
								className="border-t border-mint-rule py-2.5 text-[15px] text-body"
							>
								{detail}
							</li>
						))}
					</ul>
				</article>
			))}
		</div>
	);
}
