import {Project} from "../models/project";

export const projects: Project[] = [
  {
    name: "Трехдневный интенсив «ЦТ по физике»  02-04 января 2024",
    format: "online",
    startDate: "02.01.2024",
    endDate: "04.01.2024",
    program: [
        "механика",
        "молекулярная физика, термодинамика",
        "электростатика, постоянный ток"
    ],
    suitableFor: [
        "учишься в 10-11 классе",
        "начинаешь подготовку к ЦТ (с нуля, самостоятельно или с репетитором),",
        "запутался и не знаешь, как действовать",
        "чувствуешь, что тебе не хватает знаний по предмету",
        "необходима дополнительная отработка заданий ЦТ",
    ],
    results: [
        "проверишь свой уровень",
        "усилишь свои знания по физике",
        "окунёшься в пространство единомышленников",
    ],
    resources: [
        "получишь знания и поддержку опытного куратора",
        "подробный разбор задач ЦТ, просто и доступно",
        "чек-листы для решения различных типов задач",
        "ясный пошаговый алгоритм для каждого типа задачи",
        "домашнее задание (по желанию) для укрепления знаний и возможность получить мою обратную связь",
        "доступ к записи интенсива до 01.07.2024 (до дня ЦТ включительно)",
    ],
    priceOptions: [
      {
        name: "Стандартный пакет",
        description: "без обратной связи и проверки дз",
        amount: 60,
      },
      {
        name: "Расширенный пакет",
        description: "с проверкой дз и ответами на вопросы",
        amount: 75,
      }
    ]
  }
];