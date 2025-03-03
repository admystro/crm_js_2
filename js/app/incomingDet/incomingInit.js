import { addFormExpenses, addFormIncoming, addManger } from "../Elements/elements.js";
import { dayPicker } from "../Elements/dayPicker.js";
import { multiSelectEvent } from "./event/multiselectEvent.js"
import { incomingShow } from "./incomingShow.js";
import { percentCheck } from "./event/percentCheck.js";
import { showTotals } from "./event/showTotals.js";
import { tableEvent } from "./event/tableEvent.js";
import { addIncomingEvent } from "./event/addIncomingEvent.js";
import { addManagerToForm } from "./event/addManagerToForm.js";
import { tabNavEvent } from "./event/tabNavEvent.js";
import { addExpensesEvent } from "../ExpensesDet/event/addExpensesEvent.js";
import { ExpensesShow } from "../ExpensesDet/ExpensesShow.js";


export function incomingInit() {
  multiSelectEvent() // селект
  incomingShow() // Виводимо профіт в таблицю
  ExpensesShow() // виводимо расход в таблицю
  dayPicker() // календар
  percentCheck()// перевірка процентів
  showTotals() // виводимо тотал
  tableEvent()// обробка кліку по таблиці
  tabNavEvent() // наігація вкладок

  addFormIncoming.onsubmit = addIncomingEvent
  addManger.onclick = addManagerToForm

  addFormExpenses.onsubmit = addExpensesEvent
}
