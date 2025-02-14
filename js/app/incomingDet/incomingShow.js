import { incomingTable } from "../Elements/elements.js";
import { incomingsData } from "./incomingsData.js";
import { incomingsDeteils } from "./incomingsDeteils.js";

export async function incomingShow(needUpdateApidata = null) {

  // Дивимося чи потрібно оновити дані з API
  const incomingsDataNew = needUpdateApidata ?? incomingsData;

  // чистимо таблицю
  incomingTable.innerHTML = ''

  // выводим записи в таблицу
  incomingsDataNew.forEach((incomings) => {
    incomingsDeteils(incomings);
  });


}