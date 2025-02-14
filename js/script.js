import { body } from "./app/Elements/elements.js";
import { incomingInit } from "./app/incomingDet/incomingInit.js";
import { managersInit } from "./app/managers/managersInit.js";

// Отримуємо назву сторінку
const page = body.dataset.page;

// Переключаємо режим сторінки
switch (page) {
  case 'home':
    incomingInit();
    break;

  case 'managers':
    managersInit();

    break;
}




