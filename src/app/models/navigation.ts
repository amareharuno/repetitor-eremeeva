export interface NavigationItem {
  name: string;
  anchorLink: ANCHOR;
}

export enum ANCHOR {
  About = "about",
  Projects = "projects",
  Questions = "questions",
  Reviews = "reviews"
}
