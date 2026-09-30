type Accent = "lavender" | "mint" | "peach" | "butter";

type Props = {
	number: number;
	title: string;
	accent: Accent;
	/** 제목 줄과 본문 사이 간격. 본문 글씨가 큰 섹션은 조금 좁힌다. */
	titleGap?: string;
	className?: string;
	children: React.ReactNode;
};

const BAR_COLORS: Record<Accent, string> = {
	lavender: "bg-lavender",
	mint: "bg-mint",
	peach: "bg-peach",
	butter: "bg-butter",
};

export default function Section({
	number,
	title,
	accent,
	titleGap = "mb-7",
	className = "py-11",
	children,
}: Props) {
	return (
		<section className={className}>
			<div
				aria-hidden="true"
				className={`h-1.5 w-full rounded-full ${BAR_COLORS[accent]}`}
			/>
			<div
				className={`mt-[18px] flex flex-wrap items-baseline gap-4 ${titleGap}`}
			>
				<span className="font-latin text-xs font-bold tracking-[0.16em] text-muted tabular-nums">
					NO. {String(number).padStart(2, "0")}
				</span>
				<h2 className="font-display text-[clamp(26px,3.4vw,42px)] font-bold tracking-[-0.015em]">
					{title}
				</h2>
			</div>
			{children}
		</section>
	);
}
