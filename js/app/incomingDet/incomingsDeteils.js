import { incomingTable } from "../Elements/elements.js";

export function incomingsDeteils(incomingDeteils) {
  const comment = incomingDeteils.comment
  const manager = incomingDeteils.manager
  const profit = incomingDeteils.profit
  const date = incomingDeteils.date
  const managerComissions = Math.floor(incomingDeteils.profit * (incomingDeteils.mangerPercent / 100))
  const supervisorComissions = Math.floor(incomingDeteils.profit * 0.10)
  const salary = supervisorComissions + managerComissions
  const rowNumber = incomingTable.rows.length + 1;

  incomingTable.innerHTML += `
    <tr class="main-row js-main-row" style="cursor: pointer;">
      <td>${rowNumber}</td>
      <td>${date}</td>
      <td>${comment};Супервайзер</td>
      <td>${manager};Супервайзер</td>
      <td>USDT</td>
      <td class="text-end">${profit}</td>
      <td class="text-end">${managerComissions}</td>
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