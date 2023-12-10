import {Section} from "../models/project";
import {ANCHOR} from "../models/navigation";

export const name = "Светлана Еремеева";

export const introText = `Здравствуйте, я Светлана Александровна Еремеева - учитель по физике высшей категории, более 23 лет в профессии.`;

export const introItems: string[] = [
  "Готовлю к ЦТ с 2013 года.",
  "Средний балл ЦТ за последние три года 78.",
  "Каждый третий сдает ЦТ на 80+"
]

export const landingSections: Section[] = [
  {
    anchorId: ANCHOR.About,
  },
  {
    anchorId: ANCHOR.Projects,
    title: "Мои проекты",
  },
  {
    anchorId: ANCHOR.Reviews,
    title: "Отзывы",
  },
  {
    anchorId: ANCHOR.Questions,
    title: "Остались вопросы?",
  },
];
export const SECTIONS = {
  about: "Обо мне",
  projects: "Мои проекты",
  questions: "Остались вопросы?",
  reviews: "Отзывы",
}
export const BUTTON = {
  GoogleForm: "Получить бесплатную консультацию",
  Contact: "Связаться со мной",
  Details: "Узнать больше",
}

export const googleFormLink = "https://forms.gle/tsPxMzmTurEshPyB9";

export const socialNetworks = [
  {
    icon: "bi bi-instagram",
    link: "https://instagram.com/repetitor_eremeeva?igshid=OGQ5ZDc2ODk2ZA=="
  },
  {
    icon: "bi bi-telephone",
    link: "tel:+123456789"
  },
  {
    icon: "bi bi-envelope", // почта
    link: "mailto:bla@gmail.com"
  }
]
