import { apiUrl, getData, postData } from "../../api/Data.js";
import { viewManagerInfo } from "../managers/viewManagerInfo.js";
import { formDataObj } from "../utils/utils.js";


export async function addUserEvent(event) {
  event.preventDefault();

  // переформатувати
  const managerInfo = formDataObj(event.target);

  // перевірити на дублікат
  const apiManagerInfo = await getData(apiUrl.existUser + managerInfo.name);

  if (apiManagerInfo == "Not found") {
    // добавити
    postData(apiUrl.users, managerInfo);
  } else {
    alert("Користувач є і не можна добавляти");
  }
  event.target.reset();

  // зробити вивід до таблиці в resultTable
  viewManagerInfo(managerInfo);
}