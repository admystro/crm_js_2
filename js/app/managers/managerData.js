import { apiUrl, getData } from "../../api/Data.js";
import { formatApiData } from "../utils/utils.js";

// Отримуємо дані менеджерів з API
export const managers = await getData(apiUrl.users);

// Переформаторваний варіант менеджерів
export const managersFormatted = formatApiData(managers);
