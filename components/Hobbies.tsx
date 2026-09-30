import type { Hobby } from "@/types/profile";

type Props = {
	hobbies: Hobby[];
};

export default function Hobbies({ hobbies }: Props) {
	return (
		<ul className="grid border-t border-neutral-300 sm:grid-cols-2 dark:border-neutral-700">
			{hobbies.map((hobby) => (
				<li
					key={hobby.name}
					className="border-b border-neutral-300 py-6 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8 dark:border-neutral-700"
				>
					<p className="font-display text-2xl sm:text-3xl en:italic">
						{hobby.name}
					</p>
					{hobby.details.length > 0 && (
						<ul className="mt-3 space-y-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
							{hobby.details.map((detail) => (
								<li key={detail}>{detail}</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	);
}
