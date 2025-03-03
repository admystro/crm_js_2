import { ExpensesTable } from "../Elements/elements.js";
import { ExpensesData } from "./ExpensesData.js";
import { ExpensesDet } from "./ExpensesDet.js";


export async function ExpensesShow(needUpdateApidata = null) {

  // Дивимося чи потрібно оновити дані з API
  const ExpensesDataNew = needUpdateApidata ?? ExpensesData;

  // чистимо таблицю
  ExpensesTable.innerHTML = ''

  // выводим записи в таблицу
  ExpensesDataNew.forEach((expenses) => {
    ExpensesDet(expenses);
    
  });


}