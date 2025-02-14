import { apiUrl, getData } from "../../api/Data.js";
import { formatApiData } from "../utils/utils.js";

// Додаткова функція, яка буде звертатися до api в разі пртреби
export const getIncomingsDataFromApi = async (url) => {
  return formatApiData(await getData(apiUrl.incomings));
}

// получаем записи из API
export const incomingsData = await getIncomingsDataFromApi();

// Глобальні дані розділу
export const total = {
  managerSum: 0,
  supervisorSum: 0,
  salarySum: 0,
}