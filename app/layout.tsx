import type { Metadata } from "next";
import { Archivo, Noto_Sans_KR } from "next/font/google";
import profileData from "@/data/profile.json";
import type { Profile } from "@/types/profile";
import "./globals.css";

const profile: Profile = profileData;
const { ko, en } = profile.content;

const archivo = Archivo({
	variable: "--font-archivo",
	subsets: ["latin"],
});

// 한글 글리프는 unicode-range로 필요한 조각만 내려받으므로 preload하지 않는다.
const notoSansKr = Noto_Sans_KR({
	variable: "--font-noto-sans-kr",
	weight: ["400", "500", "700"],
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
			className={`${archivo.variable} ${notoSansKr.variable} antialiased`}
		>
			<body className="min-h-screen bg-paper font-sans leading-[1.7] break-keep text-pretty text-ink selection:bg-lavender selection:text-ink">
				{children}
			</body>
		</html>
	);
}
