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
			<Section title={sections.interests}>
				<Interests
					interests={content.interests}
					learningTitle={sections.learning}
				/>
			</Section>
			<Section title={sections.experience}>
				<Experience experiences={content.experiences} />
			</Section>
			<Section title={sections.hobbies}>
				<Hobbies hobbies={content.hobbies} />
			</Section>
			<Section title={sections.links}>
				<Links links={links} />
			</Section>
		</>
	);
}
