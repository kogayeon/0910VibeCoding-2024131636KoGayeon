import type { Hobby } from "@/types/profile";

type Props = {
	hobbies: Hobby[];
};

export default function Hobbies({ hobbies }: Props) {
	return (
		<ul className="space-y-4">
			{hobbies.map((hobby) => (
				<li key={hobby.name} className="flex gap-3">
					<span aria-hidden="true" className="text-xl leading-7">
						{hobby.emoji}
					</span>
					<div>
						<p className="leading-7 font-medium text-stone-900 dark:text-stone-100">
							{hobby.name}
						</p>
						{hobby.details.length > 0 && (
							<ul className="mt-1 space-y-1 text-sm leading-6 text-stone-600 dark:text-stone-400">
								{hobby.details.map((detail) => (
									<li key={detail}>{detail}</li>
								))}
							</ul>
						)}
					</div>
				</li>
			))}
		</ul>
	);
}
