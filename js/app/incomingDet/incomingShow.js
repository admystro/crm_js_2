import { apiUrl, getData } from "../../api/Data.js";
import { incomingsDeteils } from "./incomingsDeteils.js";

export async function incomingShow() {
  // получаем записи из API
  const incomingsList = await getData(apiUrl.incomings);



  // проверяем, есть ли записи

  // выводим записи в таблицу
  incomingsList.forEach((incomings) => {
    incomingsDeteils(incomings);
  });

}