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
		<div className="inline-flex rounded-full border border-stone-200 p-1 text-sm dark:border-stone-800">
			{options.map(({ lang, label }) => (
				<button
					key={lang}
					type="button"
					lang={lang}
					aria-pressed={current === lang}
					onClick={() => setCurrent(lang)}
					className="rounded-full px-3 py-1 text-stone-500 transition-colors hover:text-stone-900 aria-pressed:bg-stone-900 aria-pressed:text-white dark:hover:text-stone-100 dark:aria-pressed:bg-stone-100 dark:aria-pressed:text-stone-900"
				>
					{label}
				</button>
			))}
		</div>
	);
}
