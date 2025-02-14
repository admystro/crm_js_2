import { incomingTable, sumManager, supervisorPercent } from "../../Elements/elements.js";
import { incomingsData } from "../incomingsData.js";
import { setProcent } from "../../utils/utils.js";





export function showIncomingDeteils(mainRow) {

  // Очищуємо талицю від попередніх записві
  const additionalRows = incomingTable.querySelectorAll('.additional-row');

  // Якщо вже є вивід 
  if (additionalRows.length > 0) {

    // Видаляємо всі вже існуючі дополнительні рядки
    additionalRows.forEach((row) => row.remove());
    return;

  }
  // Отримуємо ключ mainRow
  const key = mainRow.getAttribute('data-main-row');

  // Отримуємо номер рядка
  const rowNumber = mainRow.getAttribute('data-row-number');

  // Отримуємо дані про запис
  const { profit, manager: managerList } = incomingsData[key];




  // Цифра для виводу в таблицю
  let num = managerList.length + 1;

  // Процент супервайзера
  const supervisorComissions = setProcent(profit, supervisorPercent)

  // Виводимо супервайзера
  mainRow.insertAdjacentHTML(

    "afterend",
    `
      <tr class="additional-row">
        <td>${rowNumber}.${num--}</td>
        <td></td>
        <td>Супервазйер</td>
        <td>Супервазйер</td>
        <td></td>
        <td class="text-end">10%</td>
        <td class="text-end"></td>
        <td class="text-end">${supervisorComissions}</td>
        <td class="text-end">${supervisorComissions}</td>
        <td></td>
      </tr>
    `);


  // Проходимося по менеджерах, для виводу в таблицю
  managerList.forEach((manager) => {
    const { comment, manager: managerName, managerPercent } = manager;

    // Створюємо HTML-код для відображення інформації про запис
    mainRow.insertAdjacentHTML(
      "afterend",
      `<tr class="additional-row">
        <td>${rowNumber}.${num--}</td>
        <td></td>
        <td>${comment}</td>
        <td>${managerName}</td>
        <td></td>
        <td class="text-end">${managerPercent}%</td>
        <td class="text-end">${setProcent(profit, managerPercent)}</td>
        <td class="text-end"></td>
        <td class="text-end">${setProcent(profit, managerPercent)}</td>
        <td></td>
      </tr>`
    );





  });




}

