import { apiUrl, deleteData } from "../../../api/Data.js";
import { incomingTable } from "../../Elements/elements.js";
import { getIncomingsDataFromApi } from "../incomingsData.js";
import { incomingsDeteils } from "../incomingsDeteils.js";
import { incomingShow } from "../incomingShow.js";
import { showTotals } from "./showTotals.js";


export async function deleteIncoming(el) {

  // Запитуємо чи видалити
  const confirmDelete = confirm('Видалити?');

  // Якщо ні, то повертаємо
  if (!confirmDelete) {
    return;
  }

  // Отримуємо ключ mainRow
  const id = el.getAttribute('data-id');


  await deleteData(apiUrl.incomings + '/' + id)
  // Видалити з апи
  setTimeout(
    async () => {

      // отримуємо дані з API
      const incomingsData = await getIncomingsDataFromApi();

      // виводимо тотал
      showTotals(incomingsData)

      // виводимо до таблиці
      incomingShow(incomingsData)

    },
    300);


  // Видалити с таблиці


}