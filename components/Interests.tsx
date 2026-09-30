import type { LocalizedContent } from "@/types/profile";

type Props = {
	interests: LocalizedContent["interests"];
	learningTitle: string;
};

export default function Interests({ interests, learningTitle }: Props) {
	return (
		<>
			<ul className="flex flex-wrap items-baseline gap-x-[18px] gap-y-2.5 font-display text-[clamp(24px,3.2vw,40px)] leading-[1.3] font-medium tracking-[-0.015em]">
				{interests.fields.map((field, index) => (
					<li
						key={field}
						className="inline-flex items-baseline gap-[18px]"
					>
						<span>{field}</span>
						{index < interests.fields.length - 1 && (
							<span
								aria-hidden="true"
								className="font-normal text-lavender-sep"
							>
								/
							</span>
						)}
					</li>
				))}
			</ul>
			<div className="mt-[26px] flex flex-wrap items-center gap-x-4 gap-y-2.5 rounded-2xl bg-lavender-soft px-5 py-4">
				<h3 className="text-[11px] font-semibold tracking-[0.16em] text-plum uppercase">
					{learningTitle}
				</h3>
				<p className="text-base text-body">
					{interests.learning.join(" · ")}
				</p>
			</div>
		</>
	);
}
