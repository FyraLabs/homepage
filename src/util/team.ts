export type SocialType = "github" | "mastodon" | "twitter" | "website";

export const socialToName: Record<SocialType, string> = {
  github: "GitHub",
  mastodon: "Mastodon",
  twitter: "Twitter",
  website: "Website",
};

export const socialToIcon: Record<SocialType, string> = {
  github: "fa-brands:github",
  mastodon: "fa-brands:mastodon",
  twitter: "fa-brands:twitter",
  website: "fa-solid:globe",
};

export interface Social {
  type: SocialType;
  link: string;
}

export interface TeamMember {
  name: string;
  title: string;
  username: string;
  discordID?: string;
  dndIsOnline?: boolean;
  socials: Social[];
}
