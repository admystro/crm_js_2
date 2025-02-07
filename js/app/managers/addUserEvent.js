import { apiUrl, getData, postData } from "../../api/getData.js";
import { resultTable } from "../components.js";
import { viewManagerInfo } from "./viewManagerInfo.js";

export async function addUserEvent(event) {
  event.preventDefault();

  // перевірити поля
  const dataForm = new FormData(event.target);

  // переформатувати
  const managerInfo = {};

  dataForm.forEach((val, key) => {
    managerInfo[key] = val;
  });

  // перевірити на дублікат
  const apiManagerInfo = await getData(apiUrl.existUser + managerInfo.name);

  if (apiManagerInfo == "Not found") {
    // добавити
    postData(apiUrl.users, managerInfo);
  } else {
    alert("Користувач є і не можна добавляти");
  }

  // зробити вивід до таблиці в resultTable
  viewManagerInfo(managerInfo);
}