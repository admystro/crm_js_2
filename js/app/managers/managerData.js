import { apiUrl, getData } from "../../api/Data.js";

// Отримуємо дані менеджерів з API
export const managers = await getData(apiUrl.users);

// Переформаторваний варіант менеджерів
export const managersFormatted = [];

managers.forEach((manager) => {
  managersFormatted[manager.id] = manager;
});