import { resultTable } from "../Elements/elements.js";
import { managers } from "./managerData.js";
import { viewManagerInfo } from "./viewManagerInfo.js";

export async function viewManagers() {

  // чистимо таблицю
  resultTable.innerHTML = ''

  // Виводимо менеджерів до таблиці
  managers.forEach((manager) => {
    viewManagerInfo(manager);
  });
}