import { apiUrl, postData } from "../../api/Data.js";
import { dayPicker } from "../Elements/dayPicker.js";
import { incomingsDeteils } from "../incomingDet/incomingsDeteils.js";
import { formDataObj } from "../utils/utils.js";


export async function addIncomingEvent(event) {
  event.preventDefault();

  // відбираємо дані форми
  const incomingDeteils = formDataObj(event.target);

  //  добавити запис в базу
  await postData(apiUrl.incomings, incomingDeteils);

  // Очищуємо дані форми
  event.target.reset();

  // Очищаем Selectize select
  const selectizeControl = $('select.select-tools')[0].selectize;

  if (selectizeControl) {
    selectizeControl.clear(); // очищает выбранные значения
  }

  // Видаляємо добавлені поля менеджерів
  $('.manager-row').remove();

  // Повертаємо дані про дату 
  dayPicker()

  // виводимо до таблиці
  incomingsDeteils(incomingDeteils);

}