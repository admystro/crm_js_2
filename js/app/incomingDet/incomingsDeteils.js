import { incomingTable } from "../Elements/elements.js";
export const additionalRow = ''

export function incomingsDeteils(incomingDeteils) {
  const managerList = incomingDeteils.manager
  const profit = incomingDeteils.profit
  const date = incomingDeteils.date
  const supervisorComissions = Math.floor(incomingDeteils.profit * 0.10)

  const rowNumber = incomingTable.rows.length + 1;



  let manager = ''
  let comment = ''
  let managerTotalPercent = 0
  let managersTotalComissons = 0

  // для перевірки коментарів на дублікат
  const uniqueComments = new Set();

  managerList.forEach(elem => {
    // добавляємо менеджерів в таблиці
    manager += `${elem.manager}; `;

    // перевіряємо коментарі на дублікат та добавляємо
    if (elem.comment && !uniqueComments.has(elem.comment)) {
      uniqueComments.add(elem.comment);
      comment += `${elem.comment}; `;
    }
    // підраховуємо загальний процент менеджерів
    managerTotalPercent += +elem.managerPercent
  });

  // конвертуємо проценти в валюту
  managersTotalComissons = Math.floor(profit * (managerTotalPercent / 100));
  //  виводимо загльну ЗП 
  const salary = supervisorComissions + managersTotalComissons;







  incomingTable.innerHTML += `
    <tr class="main-row js-main-row" style="cursor: pointer;">
      <td>${rowNumber}</td>
      <td>${date}</td>
      <td>${comment}Супервайзер</td>
      <td>${manager}Супервайзер</td>
      <td>USDT</td>
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




