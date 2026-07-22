import type { Event } from "../types";

export const fossy26: Event = {
  name: "FOSSY 2026",
  title: "Find us in Vancouver",
  dates: "August 6–9, 2026",
  description:
    "We're headed to Rain City for FOSSY 2026! Come hang out with us at the University of British Columbia, or check out our talks!",
  links: [
    {
      label: "Learn more about FOSSY",
      href: "https://2026.fossy.ca/",
    },
    {
      label: "About Fyra Labs",
      href: "https://fyralabs.com/about",
    },
  ],
  talks: [
    {
      title: "Chromebooks are the new Thinkpads; turning ewaste into a daily driver",
      description:
        "You will learn how to replace ChromeOS with any Linux distribution of your choosing, the different options for keeping or upgrading the firmware, and then a demo of the SuzyQ Board functionality and use cases. On top of the technical side, I will discuss how I have personally reduced Chromebook e-waste at various orgs with these tools; helping kickstart you and your communities in implementing the same strategies.",
      speakers: ["Owen Zimmerman"],
      time: "Thursday, 3:00–3:45pm",
      location: "MCLD 3014",
      link: "https://2026.fossy.ca/schedule/presentation/379/",
    },
    {
      title: "Why Ultramarine Chose Plasma",
      description:
        "In Ultramarine 43, we switched our recommended Edition to Plasma, retiring Budgie's place as Flagship Edition and killing that brand. Retiring Flagship was the easy part, figuring out what to replace it with is the far more interesting story we're here to tell. In this talk, I'll walk through the technical and UX decisions we made along the way. From hours of tinkering, to finding what truly did work for users, and how Plasma made the case for itself. The switch to Plasma wasn't just the right call, but the only one, let's find out why.",
      speakers: ["Jaiden Riordan"],
      time: "Satuday, 11:45am–12:30pm",
      location: "MCLD 2002",
      link: "https://2026.fossy.ca/schedule/presentation/394/",
    },
  ],
};
