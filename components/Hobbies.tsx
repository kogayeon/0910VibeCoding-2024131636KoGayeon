import type { Hobby } from "@/types/profile";

type Props = {
	hobbies: Hobby[];
};

export default function Hobbies({ hobbies }: Props) {
	return (
		<ul className="flex flex-wrap gap-3.5">
			{hobbies.map((hobby, index) => (
				<li
					key={hobby.name}
					className="flex min-w-[180px] flex-auto items-center gap-3.5 rounded-full bg-peach-soft px-7 py-[22px]"
				>
					<span className="font-latin text-[11px] font-bold tracking-[0.16em] text-peach-ink tabular-nums">
						{String(index + 1).padStart(2, "0")}
					</span>
					<h3 className="font-display text-[clamp(18px,2vw,23px)] leading-[1.4] font-bold tracking-[-0.01em]">
						{hobby.name}
					</h3>
				</li>
			))}
		</ul>
	);
}
