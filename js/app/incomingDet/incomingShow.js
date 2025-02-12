import { apiUrl, getData } from "../../api/Data.js";
import { incomingTable, sum } from "../Elements/elements.js";
import { incomingsDeteils } from "./incomingsDeteils.js";

export async function incomingShow() {
  // получаем записи из API
  const incomingsList = await getData(apiUrl.incomings);


  // змінна підати загальний сумарний профіт
  let totalSum = 0
  let managerTotlal = 0

  // чистимо таблицю
  incomingTable.innerHTML = ''

  // выводим записи в таблицу
  incomingsList.forEach((incomings) => {
    incomingsDeteils(incomings);
    totalSum += +incomings.profit



  });

  // виводимо загальний профіт в хедер та футер таблиці
  sum.forEach((elem) => {
    elem.innerHTML = `<b>${totalSum}</b>`;
  });

  // виводимо зальну сумму коміссій менеджерів

}