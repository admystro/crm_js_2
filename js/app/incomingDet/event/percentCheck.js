import { addFormIncoming } from "../../Elements/elements.js";
import { viewBaseManagerPersent } from "./viewBaseManagerPersent.js";

export function percentCheck() {

  // Слідкуємо за введення даних в формі
  addFormIncoming.oninput = function (e) {

    // Поточний елемент з якийм ми маємо подію
    const el = e.target;
    // Слідкуємо тільки за полем mangerPercent
    if (el.name.includes('managerPercent')) {
      viewBaseManagerPersent();
    }
  }


}