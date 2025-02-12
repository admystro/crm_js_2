import { resultTable } from "../Elements/elements.js";

export function viewManagerInfo(managerInfo) {

  const date = new Date();
  // Форматирование даты в "число-месяц-год время"
  const formatDate = (date) => {
    // Получаем компоненты даты
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 так как месяцы начинаются с 0
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    // Собираем строку в нужном формате
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };



  resultTable.innerHTML +=
    `<tr>
      <td>${managerInfo.name}</td>
      <td>${managerInfo.login}</td>
      <td>${formatDate(date)}</td>
    </tr>`;



}