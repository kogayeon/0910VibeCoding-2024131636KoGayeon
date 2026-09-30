"use client";

import { useEffect, useState } from "react";
import type { Language } from "@/types/profile";

type Props = {
	options: { lang: Language; label: string }[];
};

export default function LanguageToggle({ options }: Props) {
	const [current, setCurrent] = useState<Language>("ko");

	useEffect(() => {
		const root = document.documentElement;
		root.dataset.lang = current;
		root.lang = current;
	}, [current]);

	return (
		<div className="flex gap-4">
			{options.map(({ lang, label }) => (
				<button
					key={lang}
					type="button"
					lang={lang}
					aria-pressed={current === lang}
					onClick={() => setCurrent(lang)}
					className="tracking-[0.25em] text-neutral-400 uppercase decoration-1 underline-offset-4 transition-colors hover:text-current aria-pressed:text-current aria-pressed:underline"
				>
					{label}
				</button>
			))}
		</div>
	);
}
