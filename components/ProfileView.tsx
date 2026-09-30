import Experience from "@/components/Experience";
import Hobbies from "@/components/Hobbies";
import Interests from "@/components/Interests";
import Intro from "@/components/Intro";
import Links from "@/components/Links";
import Section from "@/components/Section";
import type { LocalizedContent, ProfileLink } from "@/types/profile";

type Props = {
	content: LocalizedContent;
	links: ProfileLink[];
};

export default function ProfileView({ content, links }: Props) {
	const { sections } = content;

	return (
		<>
			<Intro
				name={content.name}
				affiliation={content.affiliation}
				tags={content.tags}
				headline={content.headline}
				bio={content.bio}
			/>
			<Section
				number={1}
				title={sections.interests}
				accent="lavender"
				titleGap="mb-6"
			>
				<Interests
					interests={content.interests}
					learningTitle={sections.learning}
				/>
			</Section>
			<Section number={2} title={sections.experience} accent="mint">
				<Experience experiences={content.experiences} />
			</Section>
			<Section number={3} title={sections.hobbies} accent="peach">
				<Hobbies hobbies={content.hobbies} />
			</Section>
			<Section
				number={4}
				title={sections.links}
				accent="butter"
				titleGap="mb-5"
				className="pt-11 pb-2"
			>
				<Links links={links} />
			</Section>
			<footer className="mt-10 border-t border-rule pt-[18px] text-center text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
				{content.colophon}
			</footer>
		</>
	);
}
