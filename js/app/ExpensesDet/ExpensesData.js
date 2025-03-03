import { apiUrl, getData } from "../../api/Data.js";
import { formatApiData } from "../utils/utils.js";

// Додаткова функція, яка буде звертатися до api в разі пртреби
export const getIncomingsDataFromApi = async (url) => {
  return formatApiData(await getData(apiUrl.expenses));
}

// получаем записи из API
export const ExpensesData = await getIncomingsDataFromApi();

// Глобальні дані розділу
export const totalExpenses = {
  cashSum: 0,
  cryptoSum: 0,
  usdSum: 0,
}