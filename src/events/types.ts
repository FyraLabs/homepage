export interface Talk {
  title: string;
  description: string;
  speakers: string[];
  time: string;
  // room #
  location: string;
  // link to talk
  link?: string;
}

export interface EventLink {
  label: string;
  href: string;
}

export interface Event {
  // short name
  name: string;
  // override for the browser title. defaults is `Fyra Labs at ${name}`,
  pageTitle?: string;
  // headline
  title: string;
  dates: string;
  location?: string;
  // for map embed, for meetups
  map?: {
    lat: number;
    lon: number;
  };
  // for meetups
  transit?: {
    // "rail" shows a train icon, "bus" a bus icon.
    mode: "rail" | "bus";
    line: string;
    stop: string;
    // colour icon for line colour, default is gray
    color?: string;
  }[];
  // link to transit agency's trip planner
  transitPlanner?: string;
  venues?: {
    name: string;
    description?: string;
    menu: string;
  }[];
  description: string;
  tagline?: string;
  links?: EventLink[];
  // optional, for conferences not meetups
  talks?: Talk[];
}
