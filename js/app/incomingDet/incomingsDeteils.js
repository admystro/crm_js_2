import { incomingTable, supervisorPercent } from "../Elements/elements.js";
import { setProcent } from "../utils/utils.js";

export let totalManagerSum = 0; // Копілка для загольної комісій менеджерів
export let totalSupervisorSum = 0; // Копілка для загольної комісій менеджерів
export let totalSalarySum = 0; // Копілка для загольної ЗП
export function incomingsDeteils(incomingDeteils) {
  const { id, date, profit, manager: managerList, currency } = incomingDeteils; // Робимо змінні з ключів об'єкта

  const rowNumber = incomingTable.rows.length + 1; // Номер запрису таблиці

  let comment = ''; // заглушка для коментарів
  let manager = ''; // Заглушка для менеджерів
  let managerTotalPercent = 0; // Заглушка для загальних процентів менеджерів

  // для перевірки коментарів на дублікат
  const uniqueComments = new Set();

  // перебираємо менеджерів
  managerList.forEach((elem) => {

    // перевіряємо коментарі на дублікат та добавляємо
    if (elem.comment && !uniqueComments.has(elem.comment)) {
      uniqueComments.add(elem.comment);
      comment += `${elem.comment}`;
    }

    // добавляємо менеджерів в таблиці
    manager += `${elem.manager}; `;

    // підраховуємо загальний процент менеджерів
    managerTotalPercent += Number(elem.managerPercent)
    totalManagerSum
  });

  // конвертуємо проценти в валюту
  const managersTotalComissons = setProcent(profit, managerTotalPercent);





  // Комісяця супервайзера
  const supervisorComissions = setProcent(profit, supervisorPercent)

  //  виводимо загльну ЗП 
  const salary = supervisorComissions + managersTotalComissons;

  // наповнюємо копілку мнеджеріі та супервйзера
  totalManagerSum += managersTotalComissons
  totalSupervisorSum += supervisorComissions
  totalSalarySum += salary

  // виводимо в таблицю
  incomingTable.innerHTML += `
    <tr class="main-row js-main-row" data-main-row="${id}" data-row-number="${rowNumber}" style="cursor: pointer;">
      <td>${rowNumber}</td>
      <td>${date}</td>
      <td>${comment}; Супервайзер</td>
      <td>${manager}Супервайзер</td>
      <td>${currency}</td>
      <td class="text-end">${profit}</td>
      <td class="text-end">${managersTotalComissons}</td>
      <td class="text-end">${supervisorComissions}</td>
      <td class="text-end">${salary}</td>
      <td>
        <button class="btn btn-danger btn-sm d-flex align-items-center mx-auto" title="Удалить" id="delete-button" style="padding: 3px 6px;">
          <span class="material-icons" id="delete-icon" style="font-size: 22px;">delete</span>
        </button>
      </td>
    </tr>
  `;
}
