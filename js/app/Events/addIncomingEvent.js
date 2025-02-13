import { apiUrl, postData } from "../../api/Data.js";
import { dayPicker } from "../Elements/dayPicker.js";
import { incomingsDeteils } from "../incomingDet/incomingsDeteils.js";
import { formDataObj } from "../utils/utils.js";





export async function addIncomingEvent(event) {
  event.preventDefault();

  // відбираємо дані форми
  const incomingDeteils = formDataObj(event.target);

  // робимо кастомну валідацію


  //  добавити запис в базу
  await postData(apiUrl.incomings, incomingDeteils);

  // Очищуємо дані форми
  event.target.reset();

  // алерт успіх

  Toastify({
    text: `Приход успешно добавлен!`,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)"
    },
    close: true,

    duration: 3000
  }).showToast();

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