import { apiUrl, getData } from "../../api/Data.js";
import { incomingTable } from "../Elements/elements.js";
import { incomingsDeteils } from "./incomingsDeteils.js";

export async function incomingShow() {
  // получаем записи из API
  const incomingsList = await getData(apiUrl.incomings);
  // чистимо таблицю
  incomingTable.innerHTML = ''

  // выводим записи в таблицу
  incomingsList.forEach((incomings) => {
    incomingsDeteils(incomings);
  });

}