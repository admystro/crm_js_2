import { managers } from "./managerData.js";
import { viewManagerInfo } from "./viewManagerInfo.js";

export async function viewManagers() {

  // Виводимо менеджерів до таблиці
  managers.forEach((manager) => {
    viewManagerInfo(manager);
  });
}