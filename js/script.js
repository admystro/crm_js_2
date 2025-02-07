import { body } from "./app/components.js";
import { managersInit } from "./app/managers/managersInit.js";

// Отримуємо назву сторінку
const page = body.dataset.page;

// Переключаємо режим сторінки
switch (page) {
  case 'home':

    break;
  case 'managers':
    managersInit();

    break;
}
