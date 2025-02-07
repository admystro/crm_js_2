import { apiUrl, getData } from "../../api/getData.js";
import { selectManagersInfo } from "./selectManagersInfo.js";

export async function selectManagers() {

  // отримуємо користувачів з API
  const managerList = await getData(apiUrl.users);

  // Виводимо менеджерів до таблиці
  managerList.forEach((manager) => {
    selectManagersInfo(manager);
  });
}