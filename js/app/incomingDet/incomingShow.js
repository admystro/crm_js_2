import { incomingTable } from "../Elements/elements.js";
import { incomingsData } from "./incomingsData.js";
import { incomingsDeteils } from "./incomingsDeteils.js";

export async function incomingShow() {

  // чистимо таблицю
  incomingTable.innerHTML = ''

  // выводим записи в таблицу
  incomingsData.forEach((incomings) => {



    incomingsDeteils(incomings);
  });


}