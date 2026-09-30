import type { ProfileLink } from "@/types/profile";

type Props = {
	links: ProfileLink[];
};

export default function Links({ links }: Props) {
	return (
		<ul className="divide-y divide-stone-200 border-y border-stone-200 dark:divide-stone-800 dark:border-stone-800">
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
							className="group flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:gap-4"
						>
							<span className="w-24 shrink-0 text-sm text-stone-500 dark:text-stone-400">
								{link.label}
							</span>
							<span className="break-all text-stone-900 underline-offset-4 group-hover:text-teal-700 group-hover:underline dark:text-stone-100 dark:group-hover:text-teal-400">
								{link.text}
							</span>
						</a>
					</li>
				);
			})}
		</ul>
	);
}
