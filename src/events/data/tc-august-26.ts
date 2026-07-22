import type { Event } from "../types";

export const tcAugust26: Event = {
  name: "Twin Cities Meetup - August 2026",
  pageTitle: "Fyra Twin Cities Meetup - August 2026",
  title: "Come Talk Tech in Saint Paul!",
  dates: "Saturday, August 15, 4:00pm",
  location: "Lake Monster Brewing - Midway, Saint Paul",
  map: {
    lat: 44.9577686,
    lon: -93.1909178,
  },
  transit: [
    {
      mode: "rail",
      line: "METRO Green Line",
      stop: "Raymond Avenue Station (~10 min walk)",
      color: "#008144",
    },
    {
      mode: "bus",
      line: "Route 67",
      stop: "University Ave & Vandalia St",
    },
  ],
  transitPlanner: "https://www.metrotransit.org/trip-planner",
  venues: [
    {
      name: "Lake Monster Brewing",
      description: "Unique beers (try the beer with milk in it) brewed steps away from the meetup.",
      menu: "https://www.lakemonsterbrewing.com/beer",
    },
    {
      name: "King Coil Spirits",
      description: "Cocktails and spirits distilled right here, also steps away from the meetup.",
      menu: "https://kingcoilspirits.com/saint-paul-king-coil-spirits-drink-menu",
    },
    {
      name: "OG Zaza",
      description: "A favourite of Team Fyra, fantastic pizza, try the footlong breadstick!",
      menu: "https://ogzazamn.com/roseville-shakopee-st-paul-minneapolis-bloomington-og-zaza-food-menu",
    },
  ],
  tagline: "No keynotes. No schedule. No agenda.",
  description:
    "Just pull up a chair and talk tech. Whether you remember GNOME 1.0, or just built your first PC, come hang with us.",
};
