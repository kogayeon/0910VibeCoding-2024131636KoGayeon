import LanguageToggle from "@/components/LanguageToggle";
import ProfileView from "@/components/ProfileView";
import profileData from "@/data/profile.json";
import type { Profile } from "@/types/profile";

const profile: Profile = profileData;

export default function Home() {
	const { ko, en } = profile.content;

	return (
		<main className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
			<div className="flex items-center justify-between border-b border-current py-3 text-[11px] tracking-[0.25em] uppercase">
				<p>
					<span lang="ko" className="en:hidden">
						{ko.issue}
					</span>
					<span lang="en" className="hidden en:inline">
						{en.issue}
					</span>
				</p>
				<LanguageToggle
					options={[
						{ lang: "ko", label: ko.languageName },
						{ lang: "en", label: en.languageName },
					]}
				/>
			</div>
			<p
				aria-hidden="true"
				className="py-4 text-center font-display [font-optical-sizing:auto] text-[clamp(4.5rem,21vw,15rem)] leading-[0.85] font-medium tracking-tight sm:py-6"
			>
				{profile.masthead}
			</p>
			<div lang="ko" className="en:hidden">
				<ProfileView content={ko} links={profile.links} />
			</div>
			<div lang="en" className="hidden en:block">
				<ProfileView content={en} links={profile.links} />
			</div>
		</main>
	);
}
