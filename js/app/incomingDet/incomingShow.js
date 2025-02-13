import { incomingTable, sum } from "../Elements/elements.js";
import { incomingsData } from "./incomingsData.js";
import { incomingsDeteils } from "./incomingsDeteils.js";

export async function incomingShow() {

  // змінна підати загальний сумарний профіт
  let totalSum = 0

  // чистимо таблицю
  incomingTable.innerHTML = ''

  // выводим записи в таблицу
  incomingsData.forEach((incomings) => {

    totalSum += Number(incomings.profit);

    incomingsDeteils(incomings);
  });

  // виводимо загальний профіт в хедер та футер таблиці
  sum.forEach((elem) => elem.innerHTML = `<b>${totalSum}</b>`);

  // виводимо зальну сумму коміссій менеджерів

}