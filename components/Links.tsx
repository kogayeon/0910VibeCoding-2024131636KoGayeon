import type { ProfileLink } from "@/types/profile";

type Props = {
	links: ProfileLink[];
};

export default function Links({ links }: Props) {
	return (
		<ul className="flex flex-col gap-2.5">
			{links.map((link) => {
				const isExternal = link.url.startsWith("http");

				return (
					<li key={link.url}>
						<a
							href={link.url}
							{...(isExternal && {
								target: "_blank",
								rel: "noopener noreferrer",
							})}
							className="grid grid-cols-[96px_1fr_auto] items-center gap-4 rounded-2xl bg-butter-soft px-[22px] py-[18px] transition duration-160 hover:translate-x-1 hover:bg-butter hover:text-plum"
						>
							<span className="text-[11px] font-bold tracking-[0.16em] text-butter-ink uppercase">
								{link.label}
							</span>
							<span className="text-[clamp(17px,2.2vw,24px)] font-semibold tracking-[-0.01em] wrap-anywhere">
								{link.text}
							</span>
							<span
								aria-hidden="true"
								className="text-xl text-butter-ink"
							>
								→
							</span>
						</a>
					</li>
				);
			})}
		</ul>
	);
}
