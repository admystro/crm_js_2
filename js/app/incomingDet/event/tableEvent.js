import { incomingTable } from "../../Elements/elements.js";
import { deleteIncoming } from "./deleteIncoming.js";
import { showIncomingDeteils } from "./showIncomingDeteils.js";

export function tableEvent() {

  // Обработчик клика теперь должен передавать элемент, по которому кликнули
  incomingTable.onclick = function (e) {

    // Відбираємо елемент по якому був клік
    const el = e.target;

    // Пробуємо отримати батьвський елемент з класом main-row
    const mainRow = el.closest('.main-row');

    // Якщо це элемент, то відбираємо його додаткові атрибути
    switch (el.getAttribute('data-type')) {
      case 'del':
        deleteIncoming(el)
        break;

      default:
        showIncomingDeteils(mainRow);
        break;
    }
  }


}