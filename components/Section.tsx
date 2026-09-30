type Props = {
	title: string;
	children: React.ReactNode;
};

export default function Section({ title, children }: Props) {
	return (
		<section className="mt-14">
			<h2 className="text-sm font-semibold tracking-wide text-teal-700 dark:text-teal-400">
				{title}
			</h2>
			<div className="mt-5">{children}</div>
		</section>
	);
}
