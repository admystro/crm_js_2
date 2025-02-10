import { apiUrl, getData } from "../../api/Data.js";
import { viewManagerInfo } from "./viewManagerInfo.js";

export async function viewManagers() {

  // отримуємо користувачів з API
  const managerList = await getData(apiUrl.users);

  // Виводимо менеджерів до таблиці
  managerList.forEach((manager) => {
    viewManagerInfo(manager);
  });
}