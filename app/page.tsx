import LanguageToggle from "@/components/LanguageToggle";
import ProfileView from "@/components/ProfileView";
import profileData from "@/data/profile.json";
import type { Profile } from "@/types/profile";

const profile: Profile = profileData;

export default function Home() {
	const { ko, en } = profile.content;

	return (
		<main className="mx-auto w-full max-w-2xl px-5 py-10 sm:py-16">
			<div className="flex justify-end">
				<LanguageToggle
					options={[
						{ lang: "ko", label: ko.languageName },
						{ lang: "en", label: en.languageName },
					]}
				/>
			</div>
			<div lang="ko" className="en:hidden">
				<ProfileView content={ko} links={profile.links} />
			</div>
			<div lang="en" className="hidden en:block">
				<ProfileView content={en} links={profile.links} />
			</div>
		</main>
	);
}
