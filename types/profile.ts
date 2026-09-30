export type Language = "ko" | "en";

export type ProfileLink = {
	label: string;
	url: string;
	text: string;
};

export type Experience = {
	title: string;
	category: string;
	summary: string;
	details: string[];
};

export type Hobby = {
	emoji: string;
	name: string;
	details: string[];
};

export type LocalizedContent = {
	languageName: string;
	name: string;
	affiliation: string;
	headline: string;
	bio: string[];
	sections: {
		interests: string;
		learning: string;
		experience: string;
		hobbies: string;
		links: string;
	};
	interests: {
		fields: string[];
		learning: string[];
	};
	experiences: Experience[];
	hobbies: Hobby[];
};

export type Profile = {
	links: ProfileLink[];
	content: Record<Language, LocalizedContent>;
};
