import type { Metadata } from "next";
import { Geist } from "next/font/google";
import profileData from "@/data/profile.json";
import type { Profile } from "@/types/profile";
import "./globals.css";

const profile: Profile = profileData;
const { ko, en } = profile.content;

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
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
			className={`${geistSans.variable} antialiased`}
		>
			<body className="min-h-screen bg-white font-sans break-keep text-stone-800 dark:bg-stone-950 dark:text-stone-200">
				{children}
			</body>
		</html>
	);
}
