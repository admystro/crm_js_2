import { dayPicker } from "../Elements/dayPicker.js";
import { addFormIncoming, addManger, incomingTable } from "../Elements/elements.js";
import { addIncomingEvent } from "../Events/addIncomingEvent.js";
import { addManagerToForm } from "../Events/addManagerToForm.js";
import { deleteIncoming } from "../Events/deleteIncoming.js";
import { multiSelectEvent } from "../Events/multiselectEvent.js";
import { showIncomingDeteils } from "../Events/showIncomingDeteils.js";
import { showTotals } from "../Events/showTotals.js";
import { viewBaseManagerPersent } from "../Events/viewBaseManagerPersent.js";
import { incomingShow } from "../incomingDet/incomingShow.js";


export function mainInit() {
  multiSelectEvent() // селект
  incomingShow() // Виводимо профіт в таблицю
  dayPicker() // календар
  showTotals() // виводимо тотал
  // видаляємо запис про надходження



  addFormIncoming.onsubmit = addIncomingEvent
  addManger.onclick = addManagerToForm

  // Слідкуємо за введення даних в формі
  addFormIncoming.oninput = function (e) {

    // Поточний елемент з якийм ми маємо подію
    const el = e.target;
    // Слідкуємо тільки за полем mangerPercent
    if (el.name.includes('managerPercent')) {
      viewBaseManagerPersent();
    }
  }

  // Обработчик клика теперь должен передавать элемент, по которому кликнули
  incomingTable.onclick = function (e) {

    // Відбираємо елемент по якому був клік
    const el = e.target;

    // Пробуємо отримати батьвський елемент з класом main-row
    const mainRow = el.closest('.main-row');

    // Якщо це элемент, то відбираємо його додаткові атрибути
    if (mainRow) {
      showIncomingDeteils(mainRow);
      deleteIncoming(mainRow)

    }
  }
}
