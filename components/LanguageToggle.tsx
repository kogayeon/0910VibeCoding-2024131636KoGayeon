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
		<div className="flex gap-2">
			{options.map(({ lang, label }) => (
				<button
					key={lang}
					type="button"
					lang={lang}
					aria-pressed={current === lang}
					onClick={() => setCurrent(lang)}
					className="cursor-pointer rounded-full bg-chip px-3.5 py-2 text-[11px] leading-[1.7] font-bold tracking-[0.14em] text-muted uppercase transition-colors duration-160 aria-pressed:bg-plum aria-pressed:text-white"
				>
					{label}
				</button>
			))}
		</div>
	);
}
