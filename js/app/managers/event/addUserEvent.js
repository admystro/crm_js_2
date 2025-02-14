import { apiUrl, getData, postData } from "../../../api/Data.js";
import { viewManagerInfo } from "../viewManagerInfo.js";
import { formDataObj } from "../../utils/utils.js";


export async function addUserEvent(event) {
  event.preventDefault();

  // переформатувати
  const managerInfo = formDataObj(event.target);

  // перевірити на дублікат
  const apiManagerInfo = await getData(apiUrl.existUser + managerInfo.name);

  if (apiManagerInfo == "Not found") {
    // добавити
    postData(apiUrl.users, managerInfo);

    // чистимо форму 
    event.target.reset();

    // алерт успіх
    Toastify({
      text: `Пользователь успешно добавлен!`,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)"
      },
      close: true,

      duration: 3000
    }).showToast();

  } else {
    Toastify({
      text: `Пользователь с таким именем существует!) `,
      style: {
        background: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))"
      },
      close: true,

      duration: 3000
    }).showToast();
  }


  // зробити вивід до таблиці в resultTable
  viewManagerInfo(managerInfo);
}