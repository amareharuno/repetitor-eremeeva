import {ANCHOR, NavigationItem} from "../models/navigation";

export const CURRENCY = "BYN";

export const NAVIGATION_PATH = {
  MAIN: "main",
  PROJECT_DETAILS: "project/:projectId",
}

export const headerNavigationItems: NavigationItem[] = [
  {
    name: "Обо мне",
    anchorLink: ANCHOR.About
  },
  {
    name: "Проекты",
    anchorLink: ANCHOR.Projects
  },
  {
    name: "Отзывы",
    anchorLink: ANCHOR.Reviews
  },
  {
    name: "Контакты",
    anchorLink: ANCHOR.Questions
  }
]
