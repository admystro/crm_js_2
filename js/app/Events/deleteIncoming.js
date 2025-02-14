import { incomingTable } from "../Elements/elements.js";
import { incomingsData } from "../incomingDet/incomingsData.js";

export function deleteIncoming(mainRow) {





  // Отримуємо ключ mainRow
  const key = mainRow.getAttribute('data-main-row');



  const deleteButton = document.querySelector('[data-delete-row="' + key + '"]');

  deleteButton.onclick = () => mainRow.remove();








}