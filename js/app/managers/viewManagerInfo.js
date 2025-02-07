import { resultTable } from "../components.js";

export function viewManagerInfo(managerInfo) {

  const date = new Date('d-m-y');

  resultTable.innerHTML +=
    `<tr>
      <td>${managerInfo.name}</td>
      <td>${managerInfo.login}</td>
      <td>${date}</td>
    </tr>`;
}