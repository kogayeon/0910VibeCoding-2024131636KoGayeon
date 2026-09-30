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
				headline={content.headline}
				bio={content.bio}
			/>
			<Section number={1} title={sections.interests}>
				<Interests
					interests={content.interests}
					learningTitle={sections.learning}
				/>
			</Section>
			<Section number={2} title={sections.experience}>
				<Experience experiences={content.experiences} />
			</Section>
			<Section number={3} title={sections.hobbies}>
				<Hobbies hobbies={content.hobbies} />
			</Section>
			<Section number={4} title={sections.links}>
				<Links links={links} />
			</Section>
			<footer className="mt-20 border-t border-current pt-4 text-center text-[11px] tracking-[0.3em] uppercase">
				{content.colophon}
			</footer>
		</>
	);
}
