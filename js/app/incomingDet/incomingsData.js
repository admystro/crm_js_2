import { apiUrl, getData } from "../../api/Data.js";
import { formatApiData } from "../utils/utils.js";

// получаем записи из API
export const incomingsData = formatApiData(await getData(apiUrl.incomings));