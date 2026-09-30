import type { Metadata } from "next";
import { Bodoni_Moda, Geist, Noto_Serif_KR } from "next/font/google";
import profileData from "@/data/profile.json";
import type { Profile } from "@/types/profile";
import "./globals.css";

const profile: Profile = profileData;
const { ko, en } = profile.content;

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
	variable: "--font-bodoni",
	subsets: ["latin"],
	style: ["normal", "italic"],
	axes: ["opsz"],
});

// 한글 글리프는 unicode-range로 필요한 조각만 내려받으므로 preload하지 않는다.
const notoSerifKr = Noto_Serif_KR({
	variable: "--font-noto-serif-kr",
	weight: ["400", "700"],
	preload: false,
});

export const metadata: Metadata = {
	title: `${ko.name} | ${en.name}`,
	description: `${ko.headline} — ${en.headline}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="ko"
			data-lang="ko"
			className={`${geistSans.variable} ${bodoni.variable} ${notoSerifKr.variable} antialiased`}
		>
			<body className="min-h-screen [font-optical-sizing:none] bg-white font-sans break-keep text-black selection:bg-black selection:text-white dark:bg-black dark:text-white dark:selection:bg-white dark:selection:text-black">
				{children}
			</body>
		</html>
	);
}
