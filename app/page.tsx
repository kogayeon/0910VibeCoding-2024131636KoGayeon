import LanguageToggle from "@/components/LanguageToggle";
import ProfileView from "@/components/ProfileView";
import profileData from "@/data/profile.json";
import type { Profile } from "@/types/profile";

const profile: Profile = profileData;

export default function Home() {
	const { ko, en } = profile.content;

	return (
		<main className="mx-auto w-full max-w-[1128px] px-6 pt-8 pb-16">
			<div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-3.5">
				<p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
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
				className="mt-7 mb-2 font-latin text-[clamp(56px,15.5vw,210px)] leading-[0.9] font-bold tracking-[-0.02em]"
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
