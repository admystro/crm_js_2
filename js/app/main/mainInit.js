import { dayPicker } from "../Elements/dayPicker.js";
import { addFormIncoming, addManger, incomingTable } from "../Elements/elements.js";
import { addIncomingEvent } from "../Events/addIncomingEvent.js";
import { addManagerToForm } from "../Events/addManagerToForm.js";
import { multiSelectEvent } from "../Events/multiselectEvent.js";
import { rowClickEvent } from "../Events/rowClickEvent.js";
// import { rowClickEvent } from "../Events/rowClickEvent.js";
import { viewBaseManagerPersent } from "../Events/viewBaseManagerPersent.js";
import { incomingShow } from "../incomingDet/incomingShow.js";


export function mainInit() {
  multiSelectEvent()
  incomingShow()
  dayPicker()


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

  incomingTable.onclick = function (e) {
    const el = e.target;
    if (el) {
      rowClickEvent()
    }





  }
}
