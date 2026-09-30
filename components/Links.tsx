import type { ProfileLink } from "@/types/profile";

type Props = {
	links: ProfileLink[];
};

export default function Links({ links }: Props) {
	return (
		<ul className="border-t border-current">
			{links.map((link) => {
				const isExternal = link.url.startsWith("http");

				return (
					<li key={link.url} className="border-b border-current">
						<a
							href={link.url}
							{...(isExternal && {
								target: "_blank",
								rel: "noopener noreferrer",
							})}
							className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8"
						>
							<span className="w-32 shrink-0 text-[11px] tracking-[0.3em] uppercase">
								{link.label}
							</span>
							<span className="flex-1 font-display text-xl break-all group-hover:italic sm:text-3xl">
								{link.text}
							</span>
							<span
								aria-hidden="true"
								className="hidden font-display text-3xl transition-transform group-hover:translate-x-1 sm:inline"
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
