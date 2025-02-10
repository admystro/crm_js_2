import { apiUrl, postData } from "../../api/Data.js";
import { incomingsDeteils } from "../incomingDet/incomingsDeteils.js";


export async function addIncomingEvent(event) {
  event.preventDefault();


  // перевірити поля
  const dataForm = new FormData(event.target);

  // переформатувати 
  const incomingDeteils = {};

  dataForm.forEach((val, key) => {
    incomingDeteils[key] = val;
  });



  //  добавити запис в базу
  await postData(apiUrl.incomings, incomingDeteils);
  event.target.reset();
  // Очищаем Selectize select
  const selectizeControl = $('#select-tools')[0].selectize;
  if (selectizeControl) {
    selectizeControl.clear(); // очищает выбранные значения
  }

  // виводимо до таблиці
  incomingsDeteils(incomingDeteils);


}