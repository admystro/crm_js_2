import { apiUrl, postData } from "../../../api/Data.js";
import { dayPicker } from "../../Elements/dayPicker.js";
import { incomingsDeteils } from "../../incomingDet/incomingsDeteils.js";
import { formDataObj } from "../../utils/utils.js";
import { ExpensesDet } from "../ExpensesDet.js";



export async function addExpensesEvent (event) {
    event.preventDefault();


     // відбираємо дані форми
      const ExpensesDeteils = formDataObj(event.target);
  
      
        //  добавити запис в базу
        await postData(apiUrl.expenses, ExpensesDeteils);

        // Очищуємо дані форми
  event.target.reset();

  // алерт успіх
  Toastify({
    text: `Расход успешно добавлен!`,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)"
    },
    close: true,

    duration: 3000
  }).showToast();

  // Повертаємо дані про дату 
    dayPicker()

     // виводимо до таблиці
     ExpensesDet(ExpensesDeteils);



    // // Оновити дані totals
    //   setTimeout(async () => {
    //     const incomingsData = await getIncomingsDataFromApi(); // отримуємо дані з API
    
    //     showTotals(incomingsData) // виводимо тотал
    //   }, 500)

}