import { TQuestion } from "../types/types";

export default [
  {
    id: 1,
    title:
      "Какой из языков программирования является статически типизированным?",
    type: "checkbox",
    correct: ["TypeScript", "Java"],
    options: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    id: 2,
    title: "Какие из перечисленных структур данных являются неизменяемыми?",
    type: "checkbox",
    correct: ["Массив", "Словарь"],
    options: ["Массив", "Список", "Очередь", "Словарь"],
  },
  {
    id: 3,
    title:
      "Как называется процесс добавления нового кода в репозиторий на GitHub?",
    type: "text",
    correct: "Коммит",
  },
  {
    id: 4,
    title: "Что такое DOM в контексте веб-разработки?",
    type: "textarea",
    correct: "Document Object Model",
  },
  {
    id: 5,
    title:
      "Какой метод массива используется для преобразования каждого элемента массива согласно заданной функции?",
    type: "radio",
    correct: "map",
    options: ["forEach", "map", "filter", "reduce"],
  },
] as TQuestion[];
